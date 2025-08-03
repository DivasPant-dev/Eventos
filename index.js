"use strict";

const events = [
  // Exclusive (Cross-category or ultra-hyped events)
  {
    title: "Demon Slayer: Kimetsu no Yaiba - Infinity Castle Arc",
    date: "2025-09-12",
    type: "Anime Movie",
    category: "Anime Movies",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "Republic Day (India)",
    date: "2025-01-26",
    type: "National Holiday",
    category: "National Holidays",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "Independence Day (India)",
    date: "2025-08-15",
    type: "National Holiday",
    category: "National Holidays",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "Diwali",
    date: "2025-10-20",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "Christmas",
    date: "2025-12-25",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "Kargil Vijay Diwas",
    date: "2025-07-26",
    type: "Military Update",
    category: "Military Updates",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "My Hero Academia: The Next Generation",
    date: "2025-09-05",
    type: "Anime Movie",
    category: "Anime Movies",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "Attack on Titan: The Final Farewell",
    date: "2025-09-15",
    type: "Anime Event",
    category: "Anime Events",
    hyped: true,
    section: "Exclusive",
  },
  {
    title: "One Piece: Red Legacy",
    date: "2025-11-10",
    type: "Anime Movie",
    category: "Anime Movies",
    hyped: true,
    section: "Exclusive",
  },

  // National Holidays
  {
    title: "Gandhi Jayanti",
    date: "2025-10-02",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "Children's Day (India)",
    date: "2025-11-14",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "Labour Day",
    date: "2025-05-01",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "Martyrs' Day",
    date: "2025-01-30",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "Constitution Day",
    date: "2025-11-26",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "Teachers' Day",
    date: "2025-09-05",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "Hindi Diwas",
    date: "2025-09-14",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "National Science Day",
    date: "2025-02-28",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },
  {
    title: "National Youth Day",
    date: "2025-01-12",
    type: "National Holiday",
    category: "National Holidays",
    hyped: false,
    section: "National Holidays",
  },

  // Military Updates
  {
    title: "Indian Army Day Parade",
    date: "2025-10-15",
    type: "Military Update",
    category: "Military Updates",
    hyped: true,
    section: "Military Updates",
  },
  {
    title: "Navy Day Celebrations",
    date: "2025-12-04",
    type: "Military Update",
    category: "Military Updates",
    hyped: false,
    section: "Military Updates",
  },
  {
    title: "Air Force Day",
    date: "2025-10-08",
    type: "Military Update",
    category: "Military Updates",
    hyped: false,
    section: "Military Updates",
  },

  // Anime
  {
    title: "Spy x Family Movie: Mission Abroad",
    date: "2025-11-21",
    type: "Anime Movie",
    category: "Anime Movies",
    hyped: false,
    section: "Anime",
  },
  {
    title: "Naruto 25th Anniversary",
    date: "2025-10-03",
    type: "Anime Event",
    category: "Anime Events",
    hyped: false,
    section: "Anime",
  },
  {
    title: "Anime Expo India",
    date: "2025-12-07",
    type: "Anime Event",
    category: "Anime Events",
    hyped: false,
    section: "Anime",
  },

  // Religions
  {
    title: "Raksha Bandhan",
    date: "2025-08-09",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Exclusive",
  },
  {
    title: "Ganesh Chaturthi",
    date: "2025-08-27",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  },
  {
    title: "Janmashtami",
    date: "2025-08-16",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Exclusive",
  },
  {
    title: "Vijayadashami (Dussehra)",
    date: "2025-10-02",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  },
  {
    title: "Eid al-Fitr",
    date: "2025-03-31",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Exclusive",
  },
  {
    title: "Good Friday",
    date: "2025-04-18",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  },
  {
    title: "Guru Nanak Jayanti",
    date: "2025-11-05",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Exclusive",
  },
  {
    title: "Buddha Purnima",
    date: "2025-05-12",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  },
  {
    title: "Mahavir Jayanti",
    date: "2025-04-10",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  },
  {
    title: "Muharram",
    date: "2025-07-06",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  },
  {
    title: "Christmas Eve",
    date: "2025-12-24",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  },
  {
    title: "Ram Navami",
    date: "2025-03-29",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Exclusive",
  },
  {
    title: "Makar Sankranti",
    date: "2025-01-14",
    type: "Religious Festival",
    category: "Religious Festivals",
    hyped: false,
    section: "Religions",
  }
];

const categories = [
  "Anime Movies",
  "Religious Festivals",
  "National Holidays",
  "Global Holidays",
  "Anime Events",
];

function renderEvents(eventList) {
  const grid = document.getElementById("events-grid");
  const sections = ["Exclusive", "National Holidays", "Military Updates", "Religions", "Anime"];
  grid.innerHTML = sections
    .map(section => {
      const sectionEvents = eventList.filter(e => e.section === section).sort((a, b) => new Date(a.date) - new Date(b.date));
      if (!sectionEvents.length) return '';
      return `
        <h2 class="section-heading">${section}</h2>
        <div class="category-grid">
          ${sectionEvents
            .map(
              (event) => {
                const newsUrl = `https://news.google.com/search?q=${encodeURIComponent(event.title)}`;
                let typeClass = '';
                if (event.type === 'Anime Movie' || event.type === 'Anime Event') typeClass = 'event-card-anime';
                else if (event.type === 'Religious Festival') typeClass = 'event-card-religious';
                else if (event.type === 'National Holiday') typeClass = 'event-card-national';
                else if (event.type === 'Military Update') typeClass = 'event-card-military';
                else if (event.type === 'Global Holiday') typeClass = 'event-card-global';
                let religionLabel = '';
                if (section === 'Religions') {
                  if (/diwali|janmashtami|ganesh|raksha|vijayadashami/i.test(event.title)) religionLabel = 'Hindu';
                  else if (/eid|ramzan/i.test(event.title)) religionLabel = 'Muslim';
                  else if (/good friday|christmas/i.test(event.title)) religionLabel = 'Christian';
                  else if (/guru nanak/i.test(event.title)) religionLabel = 'Sikh';
                  else if (/buddha/i.test(event.title)) religionLabel = 'Buddhist';
                  else if (/mahavir/i.test(event.title)) religionLabel = 'Jain';
                  else religionLabel = '';
                }
                return `
                <div class="event-card ${typeClass}" style="cursor:pointer;" onclick="window.open('${newsUrl}', '_blank', 'noopener')">
                  <div class="event-title">${event.title}</div>
                  <div class="event-date">
                    ${new Date(event.date).toLocaleDateString(undefined, {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </div>
                  ${religionLabel ? `<div class='event-religion'>${religionLabel}</div>` : ''}
                  <div class="event-type">${event.type}</div>
                </div>
                `;
              }
            )
            .join("")}
        </div>
      `;
    })
    .join("");  
}

function filterEvents(query) {
  return events.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase()) ||
    event.type.toLowerCase().includes(query.toLowerCase())
  );
}

function getSuggestions(query) {
  if (!query) return [];
  const lower = query.toLowerCase();
  return events
    .filter((e) => e.title.toLowerCase().includes(lower))
    .slice(0, 6)
    .map((e) => ({ title: e.title, type: e.type }));
}

const searchBar = document.getElementById("search-bar");
const suggestionsList = document.getElementById("suggestions");

searchBar.addEventListener("input", (e) => {
  const query = e.target.value;  
  const suggestions = getSuggestions(query);
  if (suggestions.length > 0) {
    suggestionsList.innerHTML = suggestions
      .map((s) => {
        let typeClass = '';
        if (s.type === 'Anime Movie' || s.type === 'Anime Event') typeClass = 'suggestion-anime';
        else if (s.type === 'Religious Festival') typeClass = 'suggestion-religious';
        else if (s.type === 'National Holiday') typeClass = 'suggestion-national';
        else if (s.type === 'Military Update') typeClass = 'suggestion-military';
        else if (s.type === 'Global Holiday') typeClass = 'suggestion-global';
        return `<li class="${typeClass}">${s.title}</li>`;
      })
      .join("");
    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
  renderEvents(filterEvents(query));
});

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchBar.value;
    suggestionsList.style.display = "none";
    renderEvents(filterEvents(query));
  }
});

suggestionsList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    searchBar.value = e.target.textContent;
    suggestionsList.style.display = "none";
    renderEvents(filterEvents(e.target.textContent));
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    suggestionsList.style.display = "none";
  }
});

// Initial render
renderEvents(events);

const double = function() {
    window.location.reload();
}