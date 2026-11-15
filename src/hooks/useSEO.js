import { useEffect } from "react";

const SITE_URL = "https://www.dhimandasgupta.com";
const SITE_NAME = "Dhiman Dasgupta";

function setMeta(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

// Updates document title + meta tags per route. Each page calls this with
// its own title/description so search engines don't see every route as a
// duplicate of the homepage (which is what happens if every page shares the
// same static meta tags from index.html).
function useSEO({ title, description, path = "/", image }) {
  useEffect(() => {
    const prevTitle = document.title;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    const url = `${SITE_URL}${path}`;
    const img = image || `${SITE_URL}/preview.png`;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
    setCanonical(url);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, path, image]);
}

export default useSEO;
