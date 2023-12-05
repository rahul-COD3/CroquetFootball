class AuthService {
  async setupAuthentication() {
    await this.authenticateApi();
  }

  async authenticateApi() {
    const authenticationEndpoint = "https://api.beamable.com/basic/auth/token";
    const authenticationOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-DE-SCOPE": "rahulkumar.DE_1691291377650691",
      },
      body: JSON.stringify({ grant_type: "guest" }),
    };

    try {
      const response = await fetch(
        authenticationEndpoint,
        authenticationOptions
      );
      const responseData = await response.json();
      this.storeAccessToken(responseData.access_token);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  }

  storeAccessToken(accessToken) {
    localStorage.setItem("access_token", accessToken);
  }
}

export default {
  modules: [
    {
      name: "AUTH",
      pawnBehaviors: [AuthService],
    },
  ],
};
