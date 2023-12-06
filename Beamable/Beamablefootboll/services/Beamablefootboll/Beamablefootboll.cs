using Beamable.Common;
using Beamable.Server;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using UnityEngine;

namespace Beamable.Beamablefootboll
{
	[Microservice("Beamablefootboll")]
	public class Beamablefootboll : Microservice
	{
		[ClientCallable]
		public int Add(int a, int b)
		{
			return a + b;
		}


        [ClientCallable]
        public async Promise<bool> SaveData(string playerName)
        {
			bool isSuccessful = false;

			try
			{
				// get the database
				var db = await Storage.GetDatabase<footboll>();
				var collection = db.GetCollection<ScoreData>("scoreData");

				// check if player already exists
				var player = await collection.Find(x => x.PlayerName == playerName).FirstOrDefaultAsync();
				if (player != null)
				{
                    // update existing player
                    player.Score+=5;
                    await collection.ReplaceOneAsync(x => x.PlayerName == playerName, player);
                }
                else
				{
                    // create new player
                    await collection.InsertOneAsync(new ScoreData()
					{
                        PlayerName = playerName,
                        Score = 5
                    });
                }

				return true;
			}
			catch (Exception e)
            {
                Debug.LogError(e.Message);
            }
			return isSuccessful;
        }

		// reset the scores of all players to 0 and player data should be there

		[ClientCallable]
		public async Promise<bool> ResetScores()
		{
            bool isSuccessful = false;

            try
			{
                // get the database
                var db = await Storage.GetDatabase<footboll>();
                var collection = db.GetCollection<ScoreData>("scoreData");

                // check if player already exists
                var player = await collection.Find(_ => true).ToListAsync();
                if (player != null)
				{
                    foreach (var item in player)
					{
                        item.Score = 0;
                        await collection.ReplaceOneAsync(x => x.PlayerName == item.PlayerName, item);
                    }
                }

                return true;
            }
            catch (Exception e)
			{
                Debug.LogError(e.Message);
            }
            return isSuccessful;
        }


		[ClientCallable]
		public async Promise<List<ScoreData>> GetScores()
		{
			var db = await Storage.GetDatabase<footboll>();
			var collection = db.GetCollection<ScoreData>("scoreData");
			return collection.Find(_ => true).SortByDescending(x => x.Score).ToList();
		}
    }


}
