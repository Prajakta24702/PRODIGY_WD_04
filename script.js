* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}

body {
  background: #222;
}
#video-background {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1; /* Set the z-index to -1 to position the video behind other elements */
}

/* Your card styling */
.card {
  position: relative; /* Ensure the card is positioned relative to the document flow */
  z-index: 1; /* Set the z-index to 1 to position the card above the video */
  width: 90%;
  max-width: 470px;
  background: linear-gradient(135deg, #00feba, #5b548a);
  color: #fff;
  margin: 100px auto 0;
  border-radius: 20px;
  padding: 40px 35px;
  text-align: center;
}
.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search input {
  border: 0;
  outline: 0;
  background: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size: 18px;
}

.search button {
  border: 0;
  outline: 0;
  background: #ebfffc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.search button img {
  width: 20px;
}

.weather-icon {
  width: 170px;
  margin-top: 30px;
}

.weather h1 {
  font-size: 80px;
  font-weight: 500;
}

.weather h2 {
  font-size: 45px;
  font-weight: 400;
  margin-top: -10px;
}

.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 50px;
}

.col {
  display: flex;
  align-items: center;
  text-align: left;
}

.col img {
  width: 40px;
  margin-right: 10px;
}

.humidity .wind {
  font-size: 28px;
  margin-top: -6px;
}

.weather {
  display: none;
}

.error {
  text-align: left;
  margin-left: 10px;
  font-size: 14px;
  margin-top: 10px;
  display: none;
}

/* Media Query for Mobile Devices */
@media (max-width: 768px) {
  .card {
    width: 95%;
    padding: 20px 15px;
    font-size: 16px;
  }

  .search {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search input {
    width: 45px;
    height: 45px;
    font-size: 15px;
  }

  .search button {
    width: 40px;
    height: 40px;
  }

  .weather h1 {
    font-size: 40px;
  }

  .weather h2 {
    font-size: 35px;
    margin-top: -8px;
  }

  .col img {
    width: 20px;
    margin-right: 8px;
  }

  .humidity .wind {
    font-size: 18px;
    margin-top: -4px;
  }
}
