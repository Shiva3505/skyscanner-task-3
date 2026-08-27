# Skyscanner JIRA Tickets - Front-End Engineering Stories

This document contains the engineering JIRA user stories created for the front-end development team to implement the redesigned **Skyscanner Advertising Platform** (Self-Serve Portal for external partners).

---

## 🎟️ JIRA Ticket 1: SKY-101

- **Issue Type**: Story
- **Project**: Skyscanner
- **Title**: FE Implementation - Self-Serve Ad Creation Page & Ad Type Selector Component
- **Reporter**: Product Engineer / UX Lead
- **Assignee**: Front-End Engineering Team
- **Priority**: High
- **Components**: `AdCreationFlow`, `AdTypeSelector`, `LiveAdPreview`
- **Figma / Design Link**: [Ad Creation Page Prototype](file:///c:/Users/shiva/OneDrive/Desktop/Skyscanner_job_simulation/task4/ad-platform-redesign/index.html)

### Description
> **As a developer, I would like to** build the self-serve Ad Creation UI with interactive ad type selection components (Text Ad, Image & Text Ad, Video Ad), copy inputs, and a real-time live preview panel, so that external partners can create and launch campaigns easily without training or manual support.

### Risk Mitigation Strategy
- **Usability Risk**: Solved by replacing complex manual ad configuration with 3 clear visual ad format cards (Text, Image & Text, Video) equipped with Eva icons and instant live preview.
- **Value Risk**: Empowers partners to launch targeted ads in under 2 minutes.

### Acceptance Criteria
1. **Ad Type Selector**:
   - Provide 3 selectable card components: **Text Ad**, **Image & Text Ad**, and **Video Ad**.
   - Include distinct SVG icons and visual active states using Skyscanner Sky Blue (`#0770E3`).
2. **Campaign Parameter Inputs**:
   - Form fields for Campaign Headline, Body Copy, Destination Landing Page URL, and Target Route/Audience.
3. **Real-time Live Preview Panel**:
   - Dynamic right-side preview box updating instantly as the user types text or changes ad format.
   - Show/hide media placeholder when toggling between Text, Image & Text, and Video ad types.
4. **Publish Action**:
   - Include a primary submit button validating required fields and triggering campaign creation API endpoint.

---

## 🎟️ JIRA Ticket 2: SKY-102

- **Issue Type**: Story
- **Project**: Skyscanner
- **Title**: FE Implementation - Ad Performance & Analytics Dashboard
- **Reporter**: Product Engineer / UX Lead
- **Assignee**: Front-End Engineering Team
- **Priority**: High
- **Components**: `AdAnalyticsDashboard`, `MetricCardGrid`, `PerformanceChart`
- **Figma / Design Link**: [Analytics Dashboard Prototype](file:///c:/Users/shiva/OneDrive/Desktop/Skyscanner_job_simulation/task4/ad-platform-redesign/index.html#design2)

### Description
> **As a developer, I would like to** implement the Ad Performance & Analytics Dashboard featuring a left-hand list of active advertisements and a right-hand analytics view with trend charts (Impressions, Clicks, CTR, Spend), so that partners can monitor campaign ROI in real-time with zero friction.

### Risk Mitigation Strategy
- **Usability Risk**: Clean side-by-side layout with separator lines separating metrics, eliminating cluttered data tables.
- **Feasibility Risk**: Utilizes modular Chart.js / Canvas visualization components that plug directly into Skyscanner's telemetry APIs.

### Acceptance Criteria
1. **Ad List Side Navigation**:
   - Left-hand side list displaying active partner campaigns with status tags and route metadata.
   - Clicking an ad item selects it and updates the main dashboard panel instantly.
2. **Metrics Overview Grid**:
   - Display 4 key metric cards: **Total Impressions**, **Total Clicks**, **Click-Through Rate (CTR)**, and **Total Spend**.
   - Include weekly percentage trend indicators (`+14.2% vs last week`).
3. **Interactive Trend Chart**:
   - Render a dual-axis line/bar chart displaying daily impressions and click trends.
   - Header title dynamically reflects the selected advertisement name.
   - Separator lines visually segmenting chart headers and data cards.

---

## 🎟️ JIRA Ticket 3: SKY-103

- **Issue Type**: Story
- **Project**: Skyscanner
- **Title**: FE Implementation - Partner Usability Feedback & Survey Module
- **Reporter**: Product Engineer / UX Lead
- **Assignee**: Front-End Engineering Team
- **Priority**: Medium
- **Components**: `PartnerFeedbackSurvey`, `SurveyQuestionBlock`
- **Figma / Design Link**: [User Feedback Survey Prototype](file:///c:/Users/shiva/OneDrive/Desktop/Skyscanner_job_simulation/task4/ad-platform-redesign/index.html#design3)

### Description
> **As a developer, I would like to** build a 5-question user feedback survey module matching Skyscanner's web design system, so that product managers can continuously collect partner feedback on platform usability, value proposition, and feature requests.

### Risk Mitigation Strategy
- **Feasibility & Investment Risk**: Direct user feedback loops answer whether it makes sense to invest further in additional ad capabilities by capturing real-time partner insights.

### Acceptance Criteria
1. **5-Question Survey Structure**:
   - Q1 (Value Risk): Self-serve ad creation value assessment.
   - Q2 (Usability Risk): Ad format selection clarity & training assessment.
   - Q3 (Analytics Usability): Real-time metrics and ROI chart usefulness.
   - Q4 (Feasibility & Capabilities): Desired future ad formats & targeting features.
   - Q5 (Overall Experience): Factors to increase partner ad spend.
2. **Skyscanner Web Branding**:
   - Styled with Skyscanner Sky Blue (`#0770E3`), clean card borders, and clear response textboxes indicating answer areas.
3. **Submission Toast Notification**:
   - Displays a clean confirmation message ("Thank you! Your feedback has been submitted...") upon form completion.
