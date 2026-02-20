---
#layout: page
layout: category
title: Experience
sidebar_link: true
permalink: /experience/
section_id: experience
---


{% capture salyx_content %}

- Developed Android applications integrating **proprietary healthcare devices** for real-time vitals capture via **BLE**, bootstrapping a production platform deployed to care homes to manage residents, logs, and alerts.

- Researched offloading a **machine learning vital prediction algorithm** from **AWS** to on-device inference, exploring feasibility in **Python** and **C++**, analyzing latency and performance trade-offs.

- Batched daily alerts into monthly API fetches, **reducing network calls by 30×**, cutting infrastructure costs and improving app responsiveness.

- Integrated backend services using **Retrofit**, **REST APIs**, and **OAuth 2.0** authentication for secure real-time synchronization.

~B~


**Tech**  
`Kotlin` • `Jetpack Compose` • `BLE` • `MVVM` • `Retrofit` • `REST APIs` • `OAuth 2.0` • `Room` • `AWS` • `Python` • `C++`

{% endcapture %}

{% include experience-card.html
logo="/assets/logos/salyx.jpeg"
company="Salyx Medical"
role="Full Stack Android Developer & ML Intern"
location="Victoria, BC"
dates="May 2025 – Dec 2025"
content=salyx_content
%}


{% capture subbots_content %}

- Modularized Python-based sound localization software with real-time data pipelines, enabling integration with our submersible’s C++ system.
- Configured and set up hardware by enabling global SSH access on Linux systems using ngrok, allowing the team to securely remote into devices.
- Updated submersible’s ROS2 version to improve compatibility, streamlining development for 13+ students.

~B~


**Tech**
`Python` • `SQL` • `CI/CD` • `Python` • `SQL` • `CI/CD` • `Python` • `SQL` • `CI/CD` `Python` • `SQL` • `CI/CD` `Python` • `SQL` • `CI/CD` `Python` • `SQL` • `CI/CD`

<div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
  <img src="/assets/css/experience/subbots/team_photo_2024.jpg"
       style="height:300px; max-width:100%; width:auto; object-fit:cover;">
  <img src="/assets/css/experience/subbots/IMG_0686.webp"
       style="height:300px; max-width:100%; width:auto; object-fit:cover;">
  <img src="/assets/css/experience/subbots/IMG_1096.webp"
       style="height:300px; max-width:100%; width:auto; object-fit:cover;">
</div>

{% endcapture %}

{% include experience-card.html
logo="/assets/logos/ubc_subbots.png"
company="UBC Subbots Engineering Design Team"
role="Software Engineer & Sound Localization"
location="Vancouver, BC"
dates="Oct 2023 – Present"
content=subbots_content
%}


{% capture sauder_content %}

- Delivered comprehensive IT and AV support to faculty, facilitating flawless class operations while producing edited recordings of lectures that enhanced the learning experience for 300+ students per term.
- Identified and proposed optimizations to inefficiencies by researching Workday REST calls to reduce shift logging time by 50% and developing Python scripts to cut down on inefficiency.
- Assisted in organizing the Learning Analytics Hackathon with 80+ participants, setting up meetings, and providing advice on various aspects, contributing to its successful execution.

~B~

{% endcapture %}


{% include experience-card.html
logo="/assets/logos/ubc_sauder.png"
company="UBC Sauder School of Business"
role="Undergraduate Academic Assistant (IT/AV)"
location="Vancouver, BC"
dates="Sept 2023 – Present"
content=sauder_content
%}

{% capture lotus_content %}

- Developed and integrated secure authentication systems, implementing **JWT** authentication, booking flows, and **Stripe** payment processing using the **PERN** stack.
- Dockerized the **PostgreSQL** database to reduce setup time and ensure consistent environments across developers.
- Used **pgAdmin4** for database management and **Postman** to validate REST routes, **reducing testing time by ~70%**.

~B~


**Tech**  
`PostgreSQL` • `Express.js` • `React` • `Node.js` • `JWT` • `Stripe` • `Docker` • `REST APIs` • `pgAdmin4` • `Postman`

{% endcapture %}

{% include experience-card.html
logo="/assets/logos/lotus.jpeg"
company="Lotus Addiction Therapy"
role="Software Engineer"
location="Caledon, ON"
dates="Dec 2023 – Jul 2024"
content=lotus_content
%}


{% capture shine_content %}

- Contributed to planning and redesigning a **PHP Moodle** course focused on Indigenous awareness to be more **mobile-friendly**, improving accessibility and usability. *(Signed an NDA)*

~B~

**Tech**  
`PHP` • `Moodle` • `Mobile UX` • `Accessibility`

{% endcapture %}

{% include experience-card.html
logo="/assets/logos/shine.png"
company="The Shine Network Institute"
role="Application Developer"
location="Toronto, ON"
dates="Dec 2023 – Apr 2024"
content=shine_content
%}
