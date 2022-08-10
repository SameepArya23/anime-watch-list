import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AnimeListProvider } from "./contexts/anime-list.context";
import { NewAnimeListProvider } from "./contexts/new-anime-list.context";
import { AnimeIdContext, AnimeIdProvider } from "./contexts/anime-info.context";
import { AddAnimeProvider } from "./contexts/add-anime-list.context";
import { UserProvider } from "./contexts/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AnimeListProvider>
          <NewAnimeListProvider>
            <AnimeIdProvider>
              <AddAnimeProvider>
                <App />
              </AddAnimeProvider>
            </AnimeIdProvider>
          </NewAnimeListProvider>
        </AnimeListProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
