---
layout: page
title: Grace Cai
permalink: /
---
<div class="row">

    <div class="col-lg-4 col-md-6 text-center mt-4">
        <!-- Fine Circle Responsive Image -->
        <div id="container" class="my-2">
            <div id="dummy"></div>
            <div id="element">
                <img
                    src="{{ site.author.image }}"
                    alt="{{ site.title }}"
                    class="circle-image wow animated zoomIn"
                    data-wow-delay=".1s"
                />
            </div>
        </div>

        
    </div>
<div class="col">
<h1>About Me</h1>
<p>I am a Computer Science and Physics double major at the University of Maryland, College Park. My interests include machine learning, computer vision, and physics-based simulation. I have two summers of experience at Uber as a Software Engineering Intern on the Technical Privacy Team working on generative AI for privacy risk triage. Additionally, I am conducting research under Prof. Ming Lin on physics-based modeling of micro-mobility vehicles for traffic simulation and autonomous vehicle training. In my free time, I enjoy playing golf and baking.</p>
</div>
</div>

<!-- # About Me
I am a Computer Science and Physics double major at the University of Maryland, College Park. My interests include machine learning, computer vision, and physics-based simulation. I have two summers of experience at Uber as a Software Engineering Intern on the Technical Privacy Team working on generative AI for privacy risk triage. Additionally, I am conducting research under Prof. Ming Lin on physics-based modeling of micro-mobility vehicles for traffic simulation and autonomous vehicle training. In my free time, I enjoy playing golf and baking. -->
<!-- <div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div> -->

<div class="row">
{% include about/timeline.html title="Experience"%}
</div>