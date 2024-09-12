import React, { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

const MyHomeSidebar = () => {
  const [articles, setArticles] = useState([]);

  // La tua chiave API - sostituisci con la tua.
  const apiKey = "de213daddb5c4b8e9f563459268609ee";
  const storageKey = "techNews"; // Chiave per il local storage
  const expirationTime = 24 * 60 * 60 * 1000; // 24 ore

  // Funzione per controllare se i dati sono nel Local Storage e non sono scaduti
  const getStoredArticles = () => {
    const storedData = localStorage.getItem(storageKey);
    if (storedData) {
      const { articles, timestamp } = JSON.parse(storedData);
      const now = new Date().getTime();
      if (now - timestamp < expirationTime) {
        return articles; // Restituisci le notizie salvate se non sono scadute
      }
    }
    return null;
  };

  // Funzione per salvare le notizie nel Local Storage con un timestamp
  const storeArticles = (articles) => {
    const data = {
      articles,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  useEffect(() => {
    // Verifica se i dati sono già nel Local Storage
    const storedArticles = getStoredArticles();
    if (storedArticles) {
      setArticles(storedArticles); // Usa i dati dal Local Storage se esistono e sono validi
    } else {
      // Se non esistono, fai una chiamata API per ottenere nuove notizie
      const fetchNews = async () => {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`
          );
          const data = await response.json();
          setArticles(data.articles); // Aggiorna lo stato con i nuovi articoli
          storeArticles(data.articles); // Salva gli articoli nel Local Storage
        } catch (error) {
          console.error("Errore durante il caricamento delle notizie:", error);
        }
      };

      fetchNews();
    }
  }, []);

  return (
    <Box
      borderRadius={2}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      className="mb-2 cardOmbra rounded-4"
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <div id="news" style={{ padding: "6px" }}>
              <h5 className="fw-bold mb-0">Linkedin Notizie</h5>
              <p className="mb-0" style={{ fontSize: "15px" }}>
                Storie princpiale
              </p>
            </div>
          </ListItem>

          {articles.length > 0 ? (
            articles.map((article, index) => (
              <ListItem key={index} disablePadding className="p-0">
                <ListItemButton
                  component="a"
                  href={article.url} // Aggiungi il link all'articolo qui
                  target="_blank" // Apre il link in una nuova scheda
                  sx={{ padding: "0px 10px" }}
                >
                  <ListItemText
                    primary={
                      <span
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "block",
                          maxWidth: "100%",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {article.title}
                      </span>
                    }
                    secondary={new Date(
                      article.publishedAt
                    ).toLocaleDateString()}
                  />
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="Nessuna notizia disponibile" />
            </ListItem>
          )}
        </List>
      </nav>
      <Divider />
    </Box>
  );
};

export default MyHomeSidebar;
