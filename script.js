let votes = {
    BJP: 0,
    INC: 0,
    AAP: 0,
    SP: 0
  };
  
  document.getElementById("voteForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get selected party
    const selectedParty = document.querySelector('input[name="party"]:checked');
  
    if (selectedParty) {
      const partyName = selectedParty.value;
      
      // Increment the vote for the selected party
      votes[partyName]++;
      
      // Update vote counts in the UI
      document.getElementById(`${partyName}-votes`).textContent = votes[partyName];
      alert("Thank You! Your vote for " +[partyName]+" is counted.");
      // Clear the form after voting
      document.getElementById("voteForm").reset();
    } else {
      alert("Please select a party to vote.");
    }
  });  
  