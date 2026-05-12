self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/int\\-par(?:/.*)?"
          }
        ],
        "source": "/int-par/pokemon/:nxtPid",
        "destination": "/int-par/(.)pokemon/:nxtPid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/int\\-par(?:/.*)?"
          }
        ],
        "source": "/int-par/pokemon/:nxtPid",
        "destination": "/int-par/(.)pokemon/:nxtPid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/int\\-par(?:/.*)?"
          }
        ],
        "source": "/int-par/pokemon/:nxtPid",
        "destination": "/int-par/(.)pokemon/:nxtPid"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/int\\-par(?:/.*)?"
          }
        ],
        "source": "/int-par/pokemon/:nxtPid",
        "destination": "/int-par/(.)pokemon/:nxtPid"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()