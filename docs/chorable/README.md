# Chorable
Incentivizing Chores through a simple game:

1. Make a weekly bet
- The # of Chores you are assigned is inversely proportional to the total % of
  the weekly pool you contribute

  ```
  (yourContribution / totalContribution) * totalChores = exemptedChores
  ``` 
        
2. Do your assigned chores
- Half your money is locked in the pool, but you can earn up to half back by 
  doing all your assigned chores
  ```
  moneyReturnedPerChore = (yourContrib / 2) / numAssignedCHores
  ```
- Once you do all your chores you unlock access to the remaining weekly chores 

3. Confirm and Be Confirmed
- A majority of "yays" are needed to confirm your chore for it to be completed
  ```
  votesRequired = roundUp(totalNumHousemates / 2) - YOU
  ```
- A simple "nay" and "second," can deny your chore (deincentivizng bad behavior)

4. Go beyond...
- Upon unlocking access to the remaining weekly chores, you can complete
  other people's chores, preventing them from doing chores and giving you an
  advantage to win the week's pool

5. **... to Win**
- The person with the **greatest chores completed** wins **the remaining pool 
  money** and chore immunity **(no assigned chores next week)**

