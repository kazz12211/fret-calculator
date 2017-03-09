# fret-calculator
- Calculate fret positions of equal temperament for guitar maker

## Goal
- Calculate bridge position and saddle height with given scale
- Calculate finger board size
- Calculate fret positions for various temperament

## Developed with
- Spring-boot
- AngularJS

## REST API

### Calculate fret positions of equal temperament 

`/calcFretPositions?scale={number}&numFrets={number}`

### Calculate saddle position and height

`/calcBridgePosition?scale={number}&jointPos={number}&neckAngle={number}&stringHeight={number}&fretHeight={number}`

### Calculate fingerboard size

`/calcFingerboardSize?scale={number}&numStrings={number}&numFrets={number}&nutPitch={number}&saddlePitch={number}&nutSpacing={number}`
