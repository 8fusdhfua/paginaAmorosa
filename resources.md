# Resources & Build Specification — Valentine Heart-to-Tree Page

## 0. Mission

Recreate the supplied Valentine video as a **fully interactive web page**, preserving the visual sequence rather than merely imitating the final screenshot.

The page should reproduce the following story:

**WhatsApp-style intro → Valentine heart button → cursor click → heart collapses into a seed → seed falls to the ground → trunk grows → branches grow → heart-shaped foliage grows from many small hearts → loose hearts drift/fall → Spanish love message appears → live love-duration counter runs → finished Valentine scene holds → optional social-media transition/reset.**

This document is intended to be handed directly to an AI coding agent.

The agent should treat the page as an **animated visual composition**, not as a generic landing page.

---

# 1. Recommended technology stack

## Primary stack

Use:

- **React**
- **TypeScript**
- **Vite**
- **CSS Modules or plain scoped CSS**
- **SVG for the tree, branches, hearts, and precise animated geometry**
- **GSAP** for timeline-based animation and path/shape orchestration
- **date-fns** only if date/time formatting utilities are useful
- **Lucide React** or another lightweight icon library only for generic UI icons if needed

### Why this stack

React is appropriate for the page/state lifecycle.

TypeScript keeps the animation model explicit and easier for another agent to maintain.

Vite keeps the project lightweight and fast.

SVG is the preferred visual rendering layer because the reference contains:

- curved branches,
- many small heart shapes,
- precise positioning,
- scalable vector-like geometry,
- progressive growth,
- path-based animation possibilities.

GSAP is recommended for the choreography because the animation is fundamentally a **sequenced timeline** with dependencies:

1. click,
2. transform,
3. fall,
4. trunk growth,
5. branch growth,
6. foliage population,
7. text reveal,
8. particle drift,
9. loop/reset.

This is easier to control as one coordinated timeline than as many unrelated CSS animations.

---

# 2. Alternative stack

If the implementation must avoid GSAP, use:

- React
- TypeScript
- Vite
- SVG
- CSS keyframes
- `requestAnimationFrame` only for the live counter and lightweight particle drift

Do **not** build the whole animation as hundreds of independent CSS keyframes unless there is a strong reason. The growth sequence needs synchronized timing.

---

# 3. What should NOT be used

Avoid:

- Three.js
- WebGL
- Canvas as the primary renderer
- heavy 3D libraries
- a 3D physics engine
- a complex particle engine
- a full animation/game framework

The reference is visually **2D, flat, vector-like, and compositional**.

The main scene should remain simple.

Canvas can be used as an optimization only if the number of particles becomes large, but the reference does not require it.

---

# 4. Page architecture

The page should conceptually contain these layers:

```text
Page
├── Intro / Source Card
│   └── WhatsApp-style message scene
│
├── Valentine Scene
│   ├── Background / Frame
│   ├── Text Layer
│   │   ├── Romantic message
│   │   ├── "— I Love You!"
│   │   └── Love-duration counter
│   │
│   ├── Tree SVG Layer
│   │   ├── Seed
│   │   ├── Trunk
│   │   ├── Main branches
│   │   ├── Secondary branches
│   │   └── Heart foliage
│   │
│   ├── Floating Hearts Layer
│   │
│   ├── Ground Line
│   │
│   └── Interaction Layer
│       └── Valentine heart button / cursor
│
└── Optional Transition Layer
    └── TikTok-style interstitial
```

The exact DOM organization is not important as long as these visual layers are clearly separated.

---

# 5. Responsive layout

The original visual is compact and approximately square.

Use a responsive scene container.

Recommended conceptual proportions:

```text
desktop:
    scene width: min(92vw, 920px)
    scene aspect ratio: approximately 1.37 / 1

mobile:
    scene width: calc(100vw - 24px)
    scene remains centered
```

The animation coordinates should be defined in a **logical coordinate system**, not directly in viewport pixels.

Recommended SVG/viewBox coordinate system:

```text
width  = 1000
height = 730
```

This gives the animation a stable internal coordinate space.

All major objects should be positioned relative to this coordinate system.

---

# 6. Scene coordinate map

Use an internal coordinate system approximately like:

```text
(0,0) -------------------------------- (1000,0)
  |                                        |
  |      TEXT                 TREE         |
  |                                        |
  |                         HEART CANOPY   |
  |                              / \       |
  |                             /   \      |
  |                            /     \     |
  |                           /       \    |
  |                              ||         |
  |                              ||         |
  |----------------------------------------|
                        GROUND
(0,730) ------------------------------- (1000,730)
```

Suggested major positions:

### Text block

Approximately:

```text
x = 70–110
y = 210–470
```

### Tree trunk

Approximately:

```text
x = 675–730
groundY = 620–650
topY = 340–380
```

### Heart canopy

Approximately:

```text
x = 510–900
y = 120–420
```

The exact values should be tuned against the reference frames.

---

# 7. Color system

Use a small controlled palette.

Suggested colors:

```text
cream background:      #FFF7E8
dark text:             #3F3535
ground line:           #453939
trunk:                 #8A5437
deep heart:            #9D1730
heart red:             #C92847
heart pink:            #E65A77
light pink:            #F48FA5
softest pink:          #F7C3CD
magenta accent:        #BF1748
```

These should be treated as starting values.

The final implementation should visually compare the colors against the reference footage and adjust them.

Do not add strong gradients unless the reference clearly needs them.

---

# 8. Typography

Use a clean modern sans-serif.

Recommended fallback stack:

```text
Inter,
ui-sans-serif,
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
sans-serif
```

The text should be:

- dark gray,
- regular/light weight,
- small-to-medium,
- generously spaced,
- left-aligned.

Avoid:

- oversized headings,
- heavy bold weights,
- decorative script fonts,
- large drop shadows.

The romantic atmosphere should come from animation and composition, not typography effects.

---

# 9. Main scene state machine

The page should use explicit visual states.

Recommended states:

```text
INTRO
BUTTON_IDLE
BUTTON_CLICKED
SEED_FALL
TRUNK_GROW
BRANCH_GROW
FOLIAGE_GROW
TREE_COMPLETE
MESSAGE_REVEAL
FINAL_HOLD
OPTIONAL_TRANSITION
RESET
```

The animation controller should be able to move between these states deterministically.

---

# 10. Master timeline

The following timing is the target choreography.

## Stage 0 — Intro

### 0.0s → 1.0s

Show a WhatsApp-style message scene.

Visuals:

- dark magenta/pink background,
- heart-shaped light/bokeh decoration,
- green message bubble,
- file/message attachment,
- white hand cursor.

Keep the composition static apart from subtle glowing hearts.

At approximately 0.7–0.9s:

- pointer moves toward message,
- click is implied,
- transition to Valentine scene.

---

# 11. Stage 1 — Valentine scene enters

### 1.0s → 1.4s

Reveal the cream Valentine scene.

Visible:

- cream background,
- rounded border,
- subtle magenta accent,
- small red heart button,
- "San Valentin" label,
- horizontal ground line.

The tree does not exist yet.

---

# 12. Stage 2 — Heart button

### 1.4s → 2.2s

The heart button is the only dominant interactive object.

The white hand pointer moves to it.

At click:

- heart compresses,
- heart slightly scales down,
- button identity disappears,
- resulting form becomes a tiny seed.

This should be extremely clear.

The user should visually understand:

**the button itself became the seed.**

---

# 13. Stage 3 — Seed drop

### 2.2s → 3.5s

The seed falls to the ground.

Behavior:

- short downward acceleration,
- tiny easing at the end,
- settles exactly on the ground line,
- brief pause.

Do not make the fall float.

It should feel like gravity.

Optional subtle effect:

- tiny 1–2 frame compression when the seed reaches the ground.

Do not add a large impact effect.

---

# 14. Stage 4 — Trunk growth

### 3.5s → 4.2s

The tree begins from the exact seed position.

The trunk:

- starts as a tiny brown line,
- grows vertically,
- thickens naturally,
- reaches final height.

The growth should appear to be physically generated from the ground upward.

Recommended visual technique:

- branch/trunk paths exist in their final shape,
- their visible stroke is revealed progressively.

This creates the feeling that the tree is drawing itself.

---

# 15. Stage 5 — Branch growth

### 4.2s → 5.0s

Branches grow from the trunk.

Recommended order:

```text
trunk
↓
large left branch
↓
large right branch
↓
secondary left/right branches
↓
small twigs
```

The branches should grow from their parent point.

Do not reveal the entire branch tree at once.

Branches are:

- brown,
- organic,
- slightly curved,
- asymmetrical,
- thinner than trunk.

The final branch network should be visible enough through the heart foliage to explain the tree structure.

---

# 16. Stage 6 — Heart foliage growth

### 5.0s → 5.8s

Begin populating the tree with individual heart leaves.

This is a key part of the page.

## Heart leaf data

Each heart can conceptually have:

```text
x
y
scale
rotation
color
delay
duration
opacity
branchAffinity
```

Use a deterministic seed so repeated playback produces the same visual arrangement unless variation is explicitly desired.

---

# 17. Heart distribution

The canopy should approximate a large heart silhouette.

The easiest visual target is:

- two rounded lobes,
- slight top-center indentation,
- broad shoulders,
- tapering lower point.

The heart particles should not form an exact geometric mathematical heart.

They should have natural irregularity.

### Distribution rule

Start with the large heart-shaped area.

Then:

1. reject points outside the target mask,
2. avoid excessive clustering,
3. vary scale,
4. vary rotation,
5. vary color,
6. slightly bias particles toward branch endpoints.

This produces a tree rather than a flat icon.

---

# 18. Relationship between branches and foliage

Foliage should appear to grow **from the branches outward**.

Therefore:

- heart clusters near branch tips appear earlier,
- hearts near the center appear shortly afterward,
- distant canopy edges fill afterward.

The viewer should feel:

**branches created the structure, then the leaves grew on them.**

This relationship is more important than perfectly matching individual heart positions.

---

# 19. Final canopy

By approximately 6.7s:

- tree is complete,
- branches are stable,
- canopy is dense,
- large heart silhouette is obvious,
- loose hearts begin drifting.

The canopy should not constantly pulse.

Keep it mostly stable.

Tiny floating motion is acceptable, but do not make the whole tree bounce.

---

# 20. Loose heart particles

Create a sparse set of independent heart particles.

Target:

```text
approximately 8–20 visible at a time
```

Each particle may vary in:

- size,
- opacity,
- rotation,
- horizontal drift,
- downward speed.

Motion should be:

- slow,
- soft,
- irregular,
- organic.

Avoid:

- rapid particle explosions,
- heavy particle density,
- perfectly synchronized motion.

---

# 21. Text reveal

The romantic text should appear progressively.

Text:

```text
Para el amor de mi vida:

Si pudiera elegir un lugar
seguro, sería a tu lado.

Cuanto más tiempo estoy
contigo más te amo.

— I Love You!
```

Reveal behavior:

- first line,
- pause,
- next lines,
- final phrase.

A simple opacity/clip/typewriter-style reveal is acceptable.

The reference feeling should be subtle.

Do not use a flashy text animation.

---

# 22. Love-duration timer

Include:

```text
Mi amor por ti comenzó hace...
```

Then show a continuously updating duration.

The implementation should calculate elapsed time from a configurable starting date.

Example configuration:

```ts
const loveStart = new Date("YYYY-MM-DDTHH:mm:ss");
```

The actual date should be configurable by the page owner.

Display:

```text
X días YY horas ZZ minutos WW segundos
```

Update once per second.

The timer should not control the animation timeline.

It is a separate continuously running visual layer.

---

# 23. Source-intro scene

The first frame of the video contains a WhatsApp-style social/share scene.

This can be recreated as a deliberately simplified visual.

Requirements:

- dark magenta background,
- glowing hearts,
- green chat bubble,
- attachment/message look,
- white hand cursor,
- centered composition,
- quick transition to the Valentine scene.

The exact WhatsApp UI should not become a complex messaging application.

It only needs to visually communicate:

**someone sent/shared the Valentine page/video.**

---

# 24. Optional TikTok-style interstitial

The source video contains short dark interstitial states with a centered TikTok logo and wordmark.

For a standalone webpage, these should be considered optional.

Preferred behavior:

```text
tree sequence
→ final hold
→ optional dark transition
→ reset to intro
```

This should be enabled through configuration.

Example conceptual configuration:

```ts
showSocialTransition: true
```

If the goal is a clean romantic webpage rather than a reproduction of the edited video, disable this by default.

---

# 25. Reset behavior

At the end of the full sequence:

```text
FINAL_HOLD
↓
RESET
↓
BUTTON_IDLE
```

The reset should:

- clear generated foliage state,
- hide loose particles,
- reset text reveal,
- return the seed to the heart button,
- reset the tree paths.

The reset should feel intentional rather than abrupt.

A short dark or fade transition can hide the reset.

---

# 26. Interaction requirements

The user should be able to trigger the experience by clicking/tapping the red Valentine heart.

Support:

- mouse click,
- touch tap,
- keyboard activation.

The heart button should visually indicate that it is interactive.

However, do not add a standard glossy button treatment.

It should still visually match the reference.

---

# 27. Accessibility

Use:

- semantic button for interaction,
- accessible label such as `"San Valentin"`,
- keyboard activation,
- `prefers-reduced-motion` handling.

When reduced motion is enabled:

- display the final tree scene,
- skip or simplify the rapid growth sequence,
- retain the text and timer,
- avoid continuous motion.

Do not remove the entire visual experience.

---

# 28. SVG strategy

Use a single main SVG coordinate system for the tree.

Conceptual layers:

```text
<svg>
  background
  ground line
  trunk
  main branches
  secondary branches
  foliage hearts
  loose floating hearts
</svg>
```

The foliage hearts can be generated from a reusable heart shape.

Use SVG path geometry for:

- trunk,
- branches,
- decorative heart leaves.

This keeps all key geometry scalable.

---

# 29. Heart shape

Use one reusable small heart silhouette and vary:

- scale,
- rotation,
- color,
- opacity.

The heart silhouette should be soft and compact, not a sharp geometric heart.

A reusable vector path is preferred to text glyphs because font rendering can vary between machines.

---

# 30. Trunk and branch geometry

The branch structure should be generated from predefined paths.

Do not attempt random branch generation for the main structure.

Use a fixed artistic skeleton.

Recommended approximate structure:

```text
                 branch
                /      \
          -----/        \-----
         /                    \
        /                      \
       /                        \
              |
              |
              |
              |
             / \
          ground
```

Then add secondary branch paths.

The trunk and primary branches should remain visually stable across resets.

---

# 31. Main tree growth technique

The visual requirement is:

> the tree appears to draw/grow itself.

The easiest rendering concept is:

- complete branch paths exist,
- the visible path starts at zero progress,
- reveal progress increases over the timeline.

The result should look like an organic line being drawn upward.

The trunk may have a slightly thicker final width than branches.

---

# 32. Foliage animation technique

Do not fade all hearts from opacity 0 simultaneously.

Instead:

- assign individual or cluster delays,
- reveal hearts in groups,
- combine opacity and tiny scale growth.

A typical leaf entrance should visually be:

```text
opacity 0
scale 0.65
↓
opacity 1
scale 1
```

with a short easing.

Avoid dramatic overshoot.

---

# 33. Visual hierarchy

The visual hierarchy should be:

```text
1. heart-shaped tree
2. romantic message
3. falling/floating hearts
4. timer
5. small UI details
```

The tree must remain the hero.

---

# 34. Background behavior

The cream background should be stable.

Do not animate the entire background.

Only subtle effects may occur:

- tiny opacity changes in decorative hearts,
- very soft background glow if desired.

The main scene should remain calm.

---

# 35. Border / frame

Create a rounded rectangular scene.

The border should be subtle.

Recommended:

- radius: visually obvious but not excessive,
- very thin border,
- small magenta accent,
- no thick shadow.

The target should feel like a physical Valentine card, but modern.

---

# 36. Ground positioning

The horizontal ground line must not move during the tree sequence.

This creates the important visual reference:

**the seed falls to the ground → the tree grows from that exact point.**

Do not animate the ground line.

---

# 37. Cursor animation

For the click scene:

1. pointer begins away from heart,
2. pointer moves toward the heart,
3. pointer fingertip reaches the heart,
4. brief click indication,
5. heart transforms,
6. pointer disappears.

The cursor should look like a white hand pointer with a subtle shadow.

It should feel like a recorded UI interaction.

---

# 38. Motion timings — detailed targets

Suggested durations:

```text
intro scene:              0.9–1.2 s
cursor approach:          0.4–0.7 s
heart click response:     0.15–0.25 s
heart → seed transform:   0.2–0.35 s
seed fall:                0.7–1.0 s
seed settle:              0.1–0.2 s
trunk growth:             0.6–0.9 s
primary branches:         0.6–0.9 s
secondary branches:       0.4–0.7 s
foliage fill:             0.7–1.2 s
message reveal:           1.5–2.5 s
final hold:               3–8 s
```

These are target ranges, not strict mathematical requirements.

The final implementation should be tuned against the reference video.

---

# 39. Timing dependency

Some stages must not overlap too much.

Critical order:

```text
CLICK
→ SEED
→ SEED FALL
→ TRUNK
→ BRANCHES
→ HEART FOLIAGE
→ MESSAGE
→ FINAL HOLD
```

Minor overlap is allowed.

For example:

- first text line can begin appearing as foliage finishes,
- loose hearts can start moving as the canopy completes.

Do not show the final full tree before the trunk/branch growth is visually readable.

---

# 40. Asset requirements

The page can be mostly code-generated.

Required assets:

### Essential

- no external photos,
- no stock images,
- no complex illustrations.

### Optional

- TikTok logo for the transition card,
- subtle heart/bokeh textures,
- social-media intro iconography.

The actual Valentine tree should be rendered as vectors rather than imported as an image.

---

# 41. Asset folder recommendation

Use a structure such as:

```text
src/
  assets/
    icons/
      heart.svg
      tiktok.svg
    audio/
    images/
  components/
  animation/
  data/
  styles/
```

Do not rasterize the whole reference video into the webpage.

The page should recreate the scene from visual primitives.

---

# 42. Data model for animation

Keep animation content separate from rendering.

Conceptually:

```ts
type HeartLeaf = {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  color: string;
  delay: number;
  branchAffinity?: number;
};

type FloatingHeart = {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  driftX: number;
  speed: number;
  delay: number;
};
```

Branch data should similarly contain stable geometry and timing.

This lets another agent tune the composition without rewriting rendering logic.

---

# 43. Deterministic foliage generation

The canopy should look intentionally designed, not random on every page load.

Use a deterministic random source or a fixed seed.

Example visual strategy:

1. create target heart mask,
2. generate candidate heart positions,
3. remove points outside the target,
4. prevent excessive collisions,
5. bias some positions around branches,
6. assign colors and scales,
7. sort by reveal time.

This gives a repeatable tree.

---

# 44. Particle lifecycle

Floating hearts should have their own lifecycle.

Conceptually:

```text
hidden
→ enter
→ drift downward
→ slight horizontal movement
→ rotate
→ fade
→ respawn
```

Keep the active count small.

The viewer should notice individual hearts occasionally.

---

# 45. Text timing

Recommended visual sequence:

```text
tree begins growing
↓
branches become visible
↓
heart foliage starts
↓
"Para el amor de mi vida:" appears
↓
first paragraph
↓
second paragraph
↓
"I Love You!"
↓
timer becomes clearly visible
```

The text does not have to wait until the tree is completely finished.

The final composition should feel like both stories are unfolding together.

---

# 46. Performance requirements

Keep the scene efficient.

Target:

- smooth 60 FPS on modern desktop,
- smooth enough on modern mobile devices,
- no continuously running React re-render for every particle if avoidable,
- animation updates should be handled by the animation layer.

SVG is acceptable for dozens or a few hundred heart nodes.

If profiling shows performance problems:

- reduce active particle count,
- avoid unnecessary React state updates,
- animate transform/opacity rather than layout properties.

Do not prematurely introduce WebGL.

---

# 47. Sound

The reference video does not require audio for the page to communicate the visual story.

Therefore:

- sound is optional,
- do not autoplay audio,
- do not make sound necessary to understand the experience.

If sound is later added, it should only activate after user interaction.

---

# 48. Responsive behavior

On narrow mobile screens:

- scale the entire scene uniformly,
- preserve tree/text relationship,
- allow slight reduction in text size,
- maintain the heart canopy silhouette,
- keep the ground line visible.

Do not reflow the scene into a standard stacked mobile layout.

The reference composition is fundamentally a **single illustrated card**.

---

# 49. Desktop behavior

On desktop:

- center the scene,
- do not stretch it excessively,
- retain the original aspect ratio,
- optionally show a subtle page background around the card.

The outer page background can remain neutral so the cream card remains the focus.

---

# 50. Reduced-motion fallback

When:

```text
prefers-reduced-motion: reduce
```

the page should:

- show the cream scene,
- show the fully grown heart tree,
- show the complete message,
- show the timer,
- eliminate rapid growth,
- eliminate continuous particle motion,
- optionally preserve one very subtle stationary heart decoration.

This keeps the page usable while respecting the system setting.

---

# 51. Error / fallback behavior

If SVG animation is unavailable:

- show complete tree,
- show full text,
- show timer,
- preserve layout.

The page should degrade to a beautiful static Valentine card rather than a blank canvas.

---

# 52. Suggested component responsibilities

A possible component decomposition:

```text
ValentinePage
├── SourceIntro
├── ValentineScene
│   ├── SceneFrame
│   ├── LoveMessage
│   ├── LoveTimer
│   ├── Tree
│   │   ├── Trunk
│   │   ├── Branches
│   │   ├── HeartCanopy
│   │   └── FloatingHearts
│   ├── Ground
│   └── HeartButton
└── SocialTransition
```

This is guidance, not a strict requirement.

The important point is that the **visual layers should remain separable**.

---

# 53. Suggested animation modules

Keep the choreography conceptually separated into:

```text
animation/
  masterTimeline
  introAnimation
  heartClickAnimation
  seedAnimation
  treeGrowthAnimation
  foliageAnimation
  textRevealAnimation
  floatingHeartsAnimation
  transitionAnimation
```

The exact file names can differ.

The important thing is that the main sequence remains understandable.

---

# 54. Route / page setup

For the final page:

```text
/
```

should load the Valentine experience directly.

No routing complexity is needed unless the agent wants a separate development/debug route.

Optional:

```text
/debug
```

could expose animation controls.

---

# 55. Recommended developer/debug controls

During development only, provide controls for:

```text
Play
Pause
Restart
Skip Intro
Skip Growth
Show Full Tree
Toggle Particles
Toggle Text
Toggle Social Transition
```

These should not be visible in the polished final page.

This makes visual tuning substantially easier.

---

# 56. Visual calibration workflow

The coding agent should build in this order:

### Step 1

Create cream card, ground line, text area, and overall geometry.

### Step 2

Draw trunk and branch skeleton.

### Step 3

Create heart leaf shape.

### Step 4

Build static full heart-shaped canopy.

### Step 5

Make trunk growth animated.

### Step 6

Make branches grow sequentially.

### Step 7

Animate foliage appearance.

### Step 8

Add button → seed transformation.

### Step 9

Animate seed fall.

### Step 10

Add romantic text and timer.

### Step 11

Add floating hearts.

### Step 12

Add intro scene.

### Step 13

Add optional TikTok-style transition.

### Step 14

Tune timing against the source video.

---

# 57. Critical acceptance test

The result is acceptable only when a viewer can watch it without explanation and immediately understand:

> “I clicked the Valentine heart, it became a seed, the seed planted itself, and my love grew into a giant heart-shaped tree.”

The following visual causes must be obvious:

```text
heart click
    ↓
seed
    ↓
ground
    ↓
tree
    ↓
branches
    ↓
heart leaves
    ↓
heart-shaped tree
```

---

# 58. Visual acceptance checklist

Before shipping, verify:

- [ ] The scene is cream and rounded.
- [ ] The Valentine's heart button is clearly visible.
- [ ] "San Valentin" appears near the button.
- [ ] A white hand cursor performs the interaction.
- [ ] The heart visibly transforms into a seed.
- [ ] The seed visibly falls.
- [ ] The seed touches the ground.
- [ ] The trunk grows from the exact seed location.
- [ ] Branches appear after the trunk.
- [ ] Branches grow progressively.
- [ ] Heart-shaped leaves appear individually/in clusters.
- [ ] The canopy becomes a large heart shape.
- [ ] Red/pink foliage has visual variety.
- [ ] The trunk remains visible beneath the canopy.
- [ ] Loose hearts drift around the tree.
- [ ] Spanish romantic text appears on the left.
- [ ] "— I Love You!" is visible.
- [ ] The love-duration timer runs.
- [ ] Text never visually overwhelms the tree.
- [ ] The ground line remains fixed.
- [ ] The final scene feels calm and romantic.
- [ ] Mobile scaling preserves the composition.
- [ ] Reduced-motion mode works.
- [ ] Restart returns to the initial state.

---

# 59. Definition of done

The project is done when:

1. It runs as a standard React + TypeScript web project.
2. Opening `/` displays the Valentine experience.
3. Clicking the heart begins the visual sequence.
4. The sequence progresses automatically.
5. Every major growth stage is visibly readable.
6. The final tree matches the source composition closely.
7. The text layout and timer match the reference feeling.
8. Floating hearts provide subtle continuous motion.
9. The entire experience is responsive.
10. The animation can restart cleanly.
11. Reduced motion has a sensible static fallback.
12. The result looks like a **living Valentine card**, not a generic web UI.

---

# 60. Final instruction to the coding agent

Do not interpret this as a request to create a generic Valentine's landing page.

The goal is a **visual recreation of the supplied video**.

Prioritize:

- composition,
- timing,
- object transformation,
- organic tree growth,
- heart-shaped foliage,
- text placement,
- negative space,
- subtle particle movement,
- emotional pacing.

The final product should feel like:

**a clicked Valentine's heart physically falling into the earth and growing into a living heart-shaped tree.**

That metaphor must remain visually obvious from beginning to end.
