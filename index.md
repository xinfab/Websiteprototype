---
layout: default
title: index
permalink:
---

{% include carousel.html %}

## Blog Posts
{% for post in site.posts %}
  <h3>
    {{ post.date | date_to_string }}
    &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
  {{ post.excerpt }}
{% endfor %}
