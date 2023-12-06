// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
  Constants.AvatarNames = [
    "newwhite",
    "madhatter",
    "marchhare",
    "admin",
    "cheshirecat",
    "alice",
  ];

  /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

  Constants.UserBehaviorDirectory = "behaviors/default";
  Constants.UserBehaviorModules = [
    "lights.js",
    "footballMove.js",
    "AuthService.js",
    "Score.js",
  ];

  Constants.DefaultCards = [
    {
      card: {
        name: "world model",
        layers: ["walk"],
        type: "3d",
        singleSided: true,
        shadow: true,
        translation: [0, -1.7, 0],
        placeholder: true,
        behaviorModules: ["AUTH"],
        placeholderSize: [400, 0.1, 400],
        placeholderColor: 0xe0e0e0,
        placeholderOffset: [0, 0, 0],
      },
    },
    {
      card: {
        name: "light",
        layers: ["light"],
        type: "lighting",
        behaviorModules: ["Light"],
        dataLocation:
          "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
        fileName: "/abandoned_parking_4k.jpg",
        dataType: "jpg",
        toneMappingExposure: 1.2,
      },
    },
    {
      card: {
        translation: [
          0.43530683471767945, -1.0881572345419834, -5.940553665658482,
        ],
        scale: [0.28303696864159394, 0.28303696864159394, 0.28303696864159394],
        rotation: [0, -0.028453630730114733, 0, 0.9995951134825911],
        layers: ["pointer"],
        name: "football.glb",
        behaviorModules: ["MoveFootball", "Score"],
        dataLocation:
          "3gRlAm-GbBQzHPaO8x_0KVoW1ID3DZ8OqvmdJqoXXMoMDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIIxYtNg1WAwsQUQEdJlAxHS0iAB0pEzI-LAMXVkgECApJAAoGDgtJFQYPEgsXFQgKBgQTSQoOBBUIEQIVFAJILFY0BC1QHiRKUCwiDxYkUTMwHjgxDSw_CVIzSiMLEzQPLRAyDQULVD4vBEgDBhMGSBVKBCMjExYlNEomVjIsMik3JDMVDAEQNFQ-NhMsCA8eUCUqAxEvCAwvPiI",
        dataScale: [2.132073633812013, 2.132073633812013, 2.132073633812013],
        fileName: "football.glb",
        modelType: "glb",
        shadow: true,
        singleSided: true,
        type: "3d",
      },
    },
  ];
}
