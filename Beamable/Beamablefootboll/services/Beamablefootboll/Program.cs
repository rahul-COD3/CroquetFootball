﻿using Beamable.Server;
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;

namespace Beamable.Beamablefootboll
{
	public class Program
	{
		/// <summary>
		/// The entry point for the <see cref="Beamablefootboll"/> service.
		/// </summary>
		public static async Task Main()
		{
			// inject data from the CLI
			await MicroserviceBootstrapper.Prepare<Beamablefootboll>();
			
			// load environment variables from local file
			LoadEnvironmentVariables();
			
			// run the Microservice code
			await MicroserviceBootstrapper.Start<Beamablefootboll>();
		}
		
		static void LoadEnvironmentVariables(string filePath=".env")
		{
			if (!File.Exists(filePath))
				throw new Exception($"No environment file found at path=[{filePath}]");

			foreach (var line in File.ReadAllLines(filePath))
			{
				var parts = line.Split(
					'=',
					StringSplitOptions.RemoveEmptyEntries);

				if (parts.Length != 2)
					continue;

				Environment.SetEnvironmentVariable(parts[0], parts[1]);
			}
		}
	}
}
