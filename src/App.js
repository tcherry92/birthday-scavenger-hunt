import React, { useState } from 'react';

const clues = [
  {
    location: "Starting Point",
    clue: "Happy Birthday! Your adventure starts with a quest,\nHead to Tammy's house to begin this test.\n\nPlay a new game and then together you'll pray,\nThere, you'll receive the clue to guide your way.",
  },
  {
    location: "Shake Shack Riddle",
    clue: "Now it's time to get a tasty lunch,\nHead to the place that will allow you to munch.",
    revealText: "Drive to 36.240000, -115.166950",
  },
  {
    location: "Packing Instructions",
    clue: "Next, it's time to head back home,\nPack your bags and put your swim clothes on.",
  },
  {
    location: "Hotel Riddle",
    clue: "With bags packed and ready to stay,\nHead to the hotel, you're on your way.",
    revealText: "Drive to 36.134560, -115.163879",
  },
  {
    location: "Poolside",
    clue: "Check-in complete, it's time for a splash,\nGive Taylor a kiss, then head to the pool in a dash.\n\nDon't stay too long on this leg of the tour,\nCome back for the next clue, I'll say around four.",
  },
  {
    location: "Dinner Riddle",
    clue: "After a swim, it's time to dine,\nHead to the room, let's change for this appointed time.",
    revealText: "Drive to 36.125440, -115.208740",
  },
  {
    location: "CJ's Clue",
    clue: "One last step before the night is through,\nHead to this last stop, there's a surprise for you.",
    revealText: "Drive to 36.286710, -115.179070",
  },
  {
    location: "Final Surprise",
    clue: "Congratulations! You've completed the quest,\nCelebrate your birthday, you've done your best.\n\nFind your gift back in the room and a special note,\nHappy Birthday! See what he wrote.",
  }
];

export default function BirthdayScavengerHunt() {
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [revealedText, setRevealedText] = useState('');

  const nextClue = () => {
    if (currentClueIndex < clues.length - 1) {
      setCurrentClueIndex(currentClueIndex + 1);
      setRevealedText('');
    }
  };

  const revealHiddenText = () => {
    setRevealedText(clues[currentClueIndex].revealText);
  };

  const currentClue = clues[currentClueIndex];
  const isLastClue = currentClueIndex === clues.length - 1;

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '30px',
      fontFamily: '"Cinzel", serif',
      background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
      borderRadius: '20px',
      boxShadow: '20px 20px 60px #0a0a0a, -20px -20px 60px #2a2a2a',
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#FFD700',
        fontSize: '32px',
        marginBottom: '30px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 'inset 5px 5px 10px #0a0a0a, inset -5px -5px 10px #2a2a2a',
      }}>Birthday Scavenger Hunt</h1>
      <div style={{
        background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '25px',
        boxShadow: '5px 5px 15px #0a0a0a, -5px -5px 15px #2a2a2a',
        border: '1px solid #FFD700',
      }}>
        <p style={{
          whiteSpace: 'pre-line',
          marginBottom: '25px',
          fontSize: '18px',
          lineHeight: '1.8',
          textAlign: 'center',
          color: '#FFD700',
          textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        }}>{currentClue.clue}</p>
        {currentClue.revealText && !revealedText && (
          <button 
            onClick={revealHiddenText} 
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(145deg, #FFD700, #FFA500)',
              color: '#000',
              border: 'none',
              borderRadius: '25px',
              marginBottom: '15px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              boxShadow: '3px 3px 6px #0a0a0a, -3px -3px 6px #2a2a2a',
            }}
          >
            Reveal Location
          </button>
        )}
        {revealedText && (
          <p style={{
            fontWeight: 'bold',
            marginBottom: '15px',
            padding: '15px',
            background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
            borderRadius: '10px',
            textAlign: 'center',
            color: '#FFD700',
            boxShadow: 'inset 3px 3px 6px #0a0a0a, inset -3px -3px 6px #2a2a2a',
            border: '1px solid #FFD700',
          }}>{revealedText}</p>
        )}
        {!isLastClue && (
          <button 
            onClick={nextClue} 
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(145deg, #FFD700, #FFA500)',
              color: '#000',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '3px 3px 6px #0a0a0a, -3px -3px 6px #2a2a2a',
            }}
          >
            Next Clue
          </button>
        )}
      </div>
      <div style={{
        textAlign: 'center',
        fontSize: '16px',
        color: '#FFD700',
        fontStyle: 'italic',
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      }}>
        {isLastClue ? "Hunt Completed!" : `Clue ${currentClueIndex + 1} of ${clues.length}`}
      </div>
    </div>
  );
}