---
layout: layouts/page.njk
title: Welcome to Our Website
hero_image: /images/hero.jpg
eleventyExcludeFromCollections: false
---

<div class="container">
    <section class="welcome-section">
        <h2>Welcome to our website!</h2>
        <p>We're excited to share our story with you.</p>
    </section>

    <section class="upcoming-events">
        <h2>Upcoming Events</h2>
        {% set events = collections.events | sort(false, false, 'data.date') | limit(3) %}

        <div class="events-preview">
            {% for event in events %}
                <div class="event-preview-card">
                    {% if event.data.image %}
                        <img src="{{ event.data.image }}" alt="{{ event.data.title }}" class="event-preview-image">
                    {% endif %}
                    <div class="event-preview-content">
                        <h3>{{ event.data.title }}</h3>
                        <p>{{ event.data.date | date }}</p>
                        <a href="{{ event.url }}" class="btn">View Details</a>
                    </div>
                </div>
            {% endfor %}
        </div>
    </section>

</div>
