# Visual Recreation Specification — Heart-to-Tree Valentine Video

## Purpose

Recreate the **visual experience and animation choreography** of the supplied reference video as a webpage. This document intentionally describes **what the viewer sees, how objects move, the timing/order of changes, the composition, and the visual states**. It does **not** describe implementation, React structure, TypeScript, CSS architecture, DOM structure, or programming techniques.

The reference is a small portrait-ish social-video composition presented inside a rounded rectangular cream panel. The main visual story is:

**a heart / Valentine button appears → it is clicked → it collapses into a small dot/seed → the seed falls to the ground → a trunk grows upward → branches grow → pink/red heart-shaped leaves appear → the tree becomes a large heart-shaped canopy → decorative hearts drift/fall → a romantic message and a love-duration counter are displayed.**

The video also contains short social-media/TikTok transition cards and repeated versions of the visual sequence.

---

# 1. Overall visual language

## Canvas

- The visual area is approximately a **576 × 420** video frame, giving it a compact, almost square social-media-card feel.
- The main scene uses a **warm ivory / pale cream background**.
- The cream scene is surrounded by a subtle rounded-corner frame.
- Along the very top edge, a **thin magenta/pink accent** is visible, especially near the rounded corners.
- The bottom portion contains a **thin horizontal dark ground line** running almost the full width of the scene.
- The composition is intentionally simple, flat, romantic, and lightly handmade rather than photorealistic.
- The typography is dark gray/black and understated.
- The dominant accent color is **Valentine red / crimson**, with several shades of pink mixed into the heart foliage.

## Main composition

The finished scene has three important areas:

1. **Left side:** romantic text block.
2. **Right / center-right:** a tree with a heart-shaped canopy made from many small hearts.
3. **Bottom:** a thin horizontal ground line.

There is generous empty negative space around the objects, especially in the early growth sequence.

---

# 2. Exact visual story / choreography

## Phase A — Social-message intro

### Approx. 0.0–1.0 seconds

The video opens on a **WhatsApp-style message screenshot** rather than directly on the tree scene.

Visible details:

- A dark magenta / pink background filled with glowing hearts and bokeh-like particles.
- A green chat-message bubble is centered horizontally.
- The message resembles a file attachment / HTML-related message.
- A large white hand cursor appears over the message area.
- The composition looks like a mobile chat interface.
- TikTok branding/watermark is visible near the lower-left.
- The screen has a deliberate social-media/edit-video aesthetic.

The hand cursor visually suggests **clicking the message**.

### Transition

The WhatsApp/chat screenshot quickly cuts to the cream Valentine scene.

---

# 3. Phase B — Valentine button

### Approx. 1.0–2.3 seconds

The cream canvas appears.

At roughly the center of the canvas is a **small, solid red heart button**.

Next to / slightly right of the heart is a small label:

**“San Valentin”**

The text is small, dark reddish/gray and visually behaves like a tiny caption attached to the heart button.

The heart itself is compact and clean:

- solid dark red / burgundy
- classic rounded heart silhouette
- no thick outline
- no glow
- flat fill

### Cursor interaction

A white hand pointer appears over the heart.

The pointer is positioned so its fingertip visually touches the heart, communicating a click/tap action.

The click moment should feel obvious but quick.

### Button response

Immediately after the click:

- the heart shrinks / compresses visually,
- the larger heart-button appearance disappears,
- the visual simplifies into a much smaller red heart/dot-like shape,
- the tiny object becomes the “seed” for the next animation.

The user should feel that the **clicked heart has transformed into a physical object** inside the scene.

---

# 4. Phase C — Heart becomes a seed

### Approx. 2.3–3.5 seconds

The transformed heart becomes a **tiny red circular seed / dot**.

Visual behavior:

- The seed is much smaller than the original Valentine heart.
- It is located in the lower-middle region of the scene.
- It moves downward toward the ground line.
- The movement should read as a **fall**, not as a teleport.
- The fall has a short, natural easing: quick downward movement followed by a small settling moment.

At the end of the fall:

- the tiny red seed reaches the area just above/on the horizontal ground line,
- it visually settles,
- there is a brief pause before growth begins.

Important visual relationship:

- The ground line remains visible and fixed.
- The seed is clearly associated with the future tree.
- The scene remains almost empty during this phase.

---

# 5. Phase D — Tree trunk grows

### Approx. 3.5–4.2 seconds

The seed initiates the tree.

The first thing that grows is the **trunk**.

### Trunk shape

- Warm medium/dark brown.
- Slightly organic, not perfectly geometric.
- Narrow at the upper end.
- Wider toward the ground.
- Slightly tapered.
- Looks hand-drawn / natural.
- No leaves yet.
- The trunk begins directly from the seed position at the ground line.

### Growth motion

The trunk does **not** appear instantly.

Instead, it grows vertically upward from the ground:

1. tiny brown point / base,
2. narrow trunk begins extending,
3. trunk becomes taller,
4. trunk reaches the approximate final trunk height.

The growth feels like a time-lapse plant animation.

The trunk should visually “draw itself” upward.

---

# 6. Phase E — Main branches grow

### Approx. 4.2–5.0 seconds

Once the trunk reaches height, branches begin growing.

### Branch order

The visual order is roughly:

- central trunk reaches full height,
- one major branch extends upward/right,
- another branch extends upward/left,
- secondary branches split from those main branches,
- smaller twigs appear.

The branch system becomes progressively more complex.

### Branch characteristics

- Brown, matching the trunk.
- Thin compared with the trunk.
- Organic curves rather than perfect straight lines.
- Branches are asymmetrical.
- The final tree is intentionally natural-looking.
- The branches form the scaffold of the future heart canopy.

### Motion

Branches seem to **extend outward from existing wood**, as if they are growing in place.

The growth is sequential:

**trunk first → main branches → secondary branches → fine twigs.**

Do not make the entire skeleton appear at once.

---

# 7. Phase F — Heart-shaped foliage starts appearing

### Approx. 5.0–5.8 seconds

Now the tree becomes a “heart tree.”

Instead of normal green leaves, the canopy is composed of **many small heart shapes**.

## Leaf / heart appearance

The foliage contains:

- crimson hearts,
- deep red hearts,
- bright red hearts,
- medium pink hearts,
- pale pink hearts,
- occasional near-white/light-pink shapes.

They vary slightly in:

- size,
- orientation,
- density,
- shade,
- distance from the branches.

The individual hearts are small enough that, at a distance, they visually merge into a dense canopy.

## Placement

The hearts appear around the branches in clusters.

The canopy is not a perfect mathematical heart.

It is an **organic heart-shaped crown**:

- broad upper left and upper right lobes,
- slightly indented center-top valley,
- tapering lower center,
- overall heart silhouette.

## Leaf-growth motion

The hearts do not all pop in simultaneously.

They appear progressively:

1. a few isolated hearts appear around the branch tips,
2. more hearts accumulate,
3. clusters build outward,
4. the upper canopy thickens,
5. gaps fill,
6. the heart silhouette becomes obvious,
7. the canopy reaches a dense, almost fluffy visual texture.

This is one of the most important parts of the reference.

---

# 8. Final tree appearance

### Approx. 5.8–6.7 seconds

The fully grown tree is the hero object.

## Final silhouette

The tree consists of:

- one tall brown trunk,
- multiple thin brown branches,
- a large heart-shaped canopy of hundreds of small hearts.

The canopy is approximately centered on the right half of the canvas.

The trunk is clearly visible below the foliage.

The heart canopy feels dense but still lets small glimpses of branches show through.

## Texture

The foliage should **not** look like one flat red blob.

Individual small hearts should remain visually legible.

The mixture of reds and pinks creates a textured collage effect.

---

# 9. Phase G — Floating / falling hearts

After or while the tree is fully formed, small heart particles move outside the canopy.

### Behavior

A few detached hearts appear around the tree, especially:

- to the left of the trunk/canopy,
- around the lower-left edge of the canopy,
- near the text area,
- occasionally below the canopy.

They drift / fall gently downward.

### Motion characteristics

- Slow and graceful.
- Slightly different speeds.
- Some hearts descend almost vertically.
- Some drift sideways.
- Some rotate slightly.
- Some enter from the canopy edge and move downward.

### Important visual quality

The detached hearts should feel like **light petals/leaves carried by air**, not like explosive particles.

The motion is sparse. The screen is never filled with hundreds of flying hearts.

---

# 10. Phase H — Romantic message appears

While the tree is established, the left side displays a romantic message.

The text is revealed gradually, line by line, as if being typed or progressively inserted.

The final visible message is approximately:

> Para el amor de mi vida:  
>
> Si pudiera elegir un lugar  
> seguro, sería a tu lado.  
>
> Cuanto más tiempo estoy  
> contigo más te amo.  
>
> — I Love You!

### Text layout

- Left aligned.
- Small to medium font size.
- Dark gray.
- Generous line spacing.
- Positioned around the upper-left to middle-left region.
- The tree occupies the right side, so the text and tree balance each other.

### Reveal behavior

The copy appears in stages.

The animation should feel like:

- line 1 appears,
- then the next line,
- then the following line,
- continuing until the complete message is visible.

The reveal should be subtle rather than a dramatic slide-in.

---

# 11. Phase I — Love-duration counter

Near the bottom-left of the scene is a second text block.

It begins approximately:

**“Mi amor por ti comenzó hace…”**

Below or beside it, a running duration is displayed.

The visible reference shows a long timer-like value approximately:

**“355 días 17 horas 08 minutos 22 segundos”**

The exact number changes over time.

### Visual behavior

The counter behaves like a **live elapsed-time display**:

- the seconds advance,
- the time text changes,
- the number visually communicates that the relationship duration is continuously increasing.

### Placement

- Lower-left.
- Close to the ground line.
- Small dark-gray typography.
- It sits partially in the same visual region as drifting hearts.

The phrase and timer should read as sentimental metadata, not as the main headline.

---

# 12. Phase J — “I Love You” emphasis

Below the main romantic paragraph, the line:

**“— I Love You!”**

is shown.

It is visually centered relative to the text block.

It acts as a small emotional payoff.

It should not be enormous; the surrounding whitespace and tree remain the focus.

---

# 13. Ground line

The ground line is a permanent visual anchor during the tree scene.

### Characteristics

- Thin.
- Dark gray / black.
- Nearly full-width.
- Runs horizontally near the bottom of the canvas.
- Slightly inset from the rounded outer frame.
- The tree trunk visually touches the line exactly where the seed landed.

The line should remain fixed while the tree grows.

---

# 14. Repeated animation / loop behavior

The video does not behave like a single uninterrupted “one time” sequence.

It contains repeated or reintroduced states.

The viewer sees multiple moments where the finished heart tree is shown again, accompanied by drifting hearts and the progressively revealed message.

For the recreated experience, it is useful to think of the sequence as a **repeatable emotional loop**:

1. interaction / click,
2. seed,
3. tree growth,
4. heart canopy,
5. romantic message,
6. timer,
7. hold on finished tree,
8. transition / reset,
9. repeat.

The later sections feel more like repeated presentations of the finished scene than a completely new visual design.

---

# 15. TikTok-style transition cards

Several points in the source video contain a dark transition screen.

### Appearance

- Very dark navy / almost-black background.
- TikTok logo centered.
- White “TikTok” wordmark under the icon.
- The TikTok icon uses the familiar cyan/red offset effect.
- The logo is centered both horizontally and vertically.
- These cards act like editorial separators between repeated clips.

### Role in timing

They are short and feel like hard cuts between pieces of the source material.

For a faithful visual recreation of the **page experience itself**, these transition cards may be treated as optional edit/interstitial states.

---

# 16. Detailed timing model

The important visual phases can be approximated like this:

| Time | Visual state |
|---|---|
| 0.0–1.0s | WhatsApp-style message / chat intro with hand cursor |
| 1.0–1.4s | Cream Valentine scene, small heart button visible |
| 1.4–2.2s | Cursor points to / clicks the heart |
| 2.2–2.5s | Heart collapses into tiny seed/dot |
| 2.5–3.5s | Seed settles near the ground |
| 3.5–4.2s | Trunk grows upward |
| 4.2–5.0s | Main and secondary branches grow |
| 5.0–5.8s | Small heart-leaves rapidly accumulate |
| 5.8–6.7s | Full heart-shaped canopy stabilizes |
| 6.7s onward | Finished tree with drifting hearts and text |
| Later repeated sections | Message text becomes more complete while tree stays established |
| Final seconds | Full romantic card, then social-media transition/end state |

The exact cuts in the source are editorial and can vary by a few frames; the important thing is the **sequence and visual causality**.

---

# 17. Motion language

The animation has a very specific emotional rhythm.

## Fast

Use fast, decisive movement for:

- the button click,
- heart-to-seed transformation,
- initial seed drop.

## Medium

Use medium-speed growth for:

- trunk,
- main branches,
- secondary branches.

## Fast-to-medium

Use an energetic but graceful build for:

- appearance of heart leaves,
- filling the heart canopy.

## Slow

Use slow movement for:

- floating detached hearts,
- tiny leaf/heart drift,
- the final resting scene.

The overall feel is **romantic time-lapse + gentle particle animation**, not bounce-heavy UI animation.

---

# 18. Easing / physical feeling

Visually, the motion should communicate:

- click = immediate response,
- seed = gravity,
- tree = organic growth,
- branches = natural extension,
- leaves = clustered emergence,
- falling hearts = air resistance / gentle drift.

Avoid cartoonish overshoot, elastic bouncing, or aggressive scaling.

The object transformations should feel **soft, organic, and cinematic**.

---

# 19. Heart-shape foliage construction — visual target

The heart canopy is the single most recognizable graphic element.

It should read as:

**a real tree whose leaves are individual tiny Valentine hearts and whose overall crown forms a giant heart.**

The canopy should have:

- two rounded upper lobes,
- a soft indentation at the top center,
- broad shoulders,
- a tapered lower center,
- dense interior texture,
- slightly irregular edge.

The outer boundary should not be perfectly smooth.

Some hearts should protrude slightly beyond the main silhouette.

Some small detached hearts should drift away from the tree.

---

# 20. Layering / depth impression

Even though the source is visually flat, there is a light feeling of depth created by overlapping hearts.

Use visual hierarchy such as:

- trunk behind foliage,
- larger/darker hearts in front,
- smaller/paler hearts filling internal gaps,
- detached hearts floating in front of the cream background.

The foliage should have no realistic 3D shading. It is mostly **2D layered illustration**.

---

# 21. Typography style

The text has a simple, clean, modern appearance.

Target characteristics:

- sans-serif feel,
- dark gray rather than pure black,
- small/medium size,
- high readability against cream,
- normal weight rather than bold,
- relaxed line spacing.

The emotional emphasis comes from the copy and animation, not oversized typography.

---

# 22. Background and framing details

The main card has:

- warm cream background,
- rounded corners,
- thin magenta/pink accent near the frame edge,
- subtle dark border elements,
- a dark horizontal baseline near the bottom.

The scene should feel like a **small printed Valentine card that has come alive**.

---

# 23. Small decorative details

The source contains several tiny details that should not be lost:

- occasional little hearts near the trunk,
- stray hearts around the left side of the canopy,
- individual heart leaves with varying rotations,
- some hearts partially overlapping the text area,
- tiny heart particles below the main canopy,
- the hand cursor during the interaction phase,
- TikTok watermark/branding in source footage,
- slight variation in heart size and shade,
- tiny visual imperfections that keep the tree from feeling algorithmically perfect.

---

# 24. Emotional / artistic target

The final result should evoke:

- Valentine’s Day,
- affection,
- growing love,
- time passing,
- tenderness,
- a handmade romantic card,
- “our love grows like a tree.”

The animation is fundamentally a **metaphor for love growing from a single heart into a full tree**.

---

# 25. Most important fidelity requirements

The recreation should preserve these visual beats above everything else:

1. **A visible heart button is clicked.**
2. **The clicked heart becomes a tiny seed/dot.**
3. **The seed falls to the ground.**
4. **A brown trunk grows from that exact point.**
5. **Branches grow progressively outward.**
6. **Small red/pink hearts accumulate as foliage.**
7. **The foliage resolves into a large heart-shaped tree crown.**
8. **Detached hearts drift/fall gently around it.**
9. **A romantic Spanish message appears on the left.**
10. **A live love-duration counter appears near the bottom-left.**
11. **The tree remains visually dominant on the right.**
12. **The whole sequence has a soft, organic, sentimental rhythm.**

---

# 26. Final visual state

The final stable composition should look approximately like this:

- cream rounded card,
- subtle magenta top-edge accent,
- thin dark ground line near bottom,
- left-side romantic paragraph,
- left-bottom love-duration counter,
- large heart-shaped tree on the right,
- brown trunk and branching structure visible beneath the canopy,
- dense mixture of red and pink heart-shaped leaves,
- several loose hearts drifting around the tree,
- lots of clean negative space,
- calm, romantic, polished finish.

The page should feel like **a living Valentine greeting card whose love literally grows into a tree**.

