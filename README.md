# Examination of Conscience & Confession Script Generator

A responsive, privacy-first web application designed to help Catholics prayerfully prepare for the Sacrament of Reconciliation (Penance/Confession). 

---

## What the App Seeks to Provide

For many Catholics, preparing for confession can sometimes feel overwhelming, disorganized, or anxiety-inducing. Remembering the specific nature, context, and counts of sins—while distinguishing properly between venial and mortal faults—requires deep interior reflection. This application seeks to provide:

1. **Structured Guidance & Clarity:** 
   By dividing the examination into traditional thematic categories (faith, love of God, love of neighbor, speech, purity, duties, justice, anger, dignity, and humility) paired with Scripture verses, the app provides a thorough framework for self-examination based on the Ten Commandments and the teachings of the Church.

2. **A Personalized, Sequential Script:** 
   Rather than forcing the user to carry a bulky notebook or loose-leaf paper into the confessional, the app dynamically compiles checked items, customizable choices, and frequency counts into an orderly, ready-to-read confession script. It clearly separates mortal and venial sins and includes introductory prayers, the standard confessional rite, a traditional Act of Contrition, and a post-penance prayer.

3. **Absolute Privacy:** 
   Confession is deeply sacred and confidential. This application operates **entirely client-side** in your browser. **No data, selections, or personal inputs are ever saved, tracked, or transmitted to any server or device.** Once you reset your selections or close the window, your information is completely gone.

4. **Clarity on Church Teachings:** 
   Includes clear reference prompts, definitions for mortal versus venial sin conditions, and expandable explainers for key Catholic teachings to ensure an informed and well-formed conscience.

---

## Key Features

* **Interactive Choice Pills:** Instead of rigid, static text statements, many sin items include modular choice chips (e.g., specific objects of attachment, types of speech, or affected duties) that let users fine-tune their exact confession.
* **Mortal vs. Venial Toggle & Occasion Counters:** Easily switch a sin's classification. When set to *Mortal*, an occasion counter automatically appears to help track the required number of occurrences.
* **Expandable Teaching Accordions:** Review detailed summaries of key Catholic doctrines (such as the Real Presence, the moral law, and Church discipline) directly within the examination flow.
* **Custom Free-Form Fields:** Each section features a custom text input to capture any unrepresented or unique sins not covered by the pre-written options.
* **Fully Responsive & Progressive Web App (PWA) Ready:** Styled with clean mobile-friendly typography, custom accent styling, smooth auto-scrolling, and manifest configurations for easy cross-device use.

---

## Project Structure

* `index.html` — The core single-page application containing the HTML layout, embedded CSS styles, and client-side JavaScript logic for state management, dynamic grammar formatting, and script generation.
* `styles.css` *(optional/external reference)* — External stylesheet support for global layout configurations.
* `manifest.json` — PWA manifest file for mobile device integration and theme styling.

---

## How to Use

1. Open **`index.html`** in any modern web browser.
2. Begin your prayerful reflection by reading the **Preparatory Prayer**.
3. Check off the boxes for sins that apply to your life. Click the **choice pills** to customize specific details, and use the **Venial/Mortal toggle buttons** to accurately classify each fault.
4. Click the **"Process Examination"** button at the bottom of the page.
5. Review your cleanly formatted, step-by-step confession script to guide you through your time in the confessional.
6. Click **"Reset All Selections"** when finished to instantly clear all data from the browser.

---

## App Licensing, Author, and Contact Information

Copyright (c) 2026 RJE Consulting, LLC

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

Rich Edinger
RJE Consulting, LLC
1930 Federal COurt
Lawrenceville, GA 30044

rapwedinger@gmail.com
