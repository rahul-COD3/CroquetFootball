using Beamable.Server;
using MongoDB.Bson;

namespace Beamable.Server
{
	/// <summary>
	/// This class represents the existence of the footboll database.
	/// Use it for type safe access to the database.
	/// <code>
	/// var db = await Storage.GetDatabase&lt;footboll&gt;();
	/// </code>
	/// </summary>
	[StorageObject("footboll")]
	public class footboll : MongoStorageObject
	{
		
	}

	public class ScoreData
	{
		public ObjectId Id;
		public string PlayerName;
		public int Score;
	}
}
