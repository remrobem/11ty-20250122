---
title: Events
layout: layouts/page.njk
---

{% set events = collections.events | sort(attribute='date') %}

<div class="events-grid">
    {% for event in events %}
    <div class="event-card">
        {% if event.data.image %}
        <img src="{{ event.data.image }}" alt="{{ event.data.title }}" class="event-card-image">
        {% endif %}
        <div class="event-card-content">
            <h2>{{ event.data.title }}</h2>
            <p class="event-date">{{ event.data.date | date }} at {{ event.data.time }}</p>
            <p class="event-location">{{ event.data.location }}</p>
            <a href="{{ event.url }}" class="btn">Learn More</a>
        </div>
    </div>
    {% endfor %}
</div>
