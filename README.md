# fret-calculator
- Calculator application for guitar makers

## Tabs
- Calculate fret positions of equal temerament
- Calculate saddle position and saddle height with given scale
- Calculate finger board size
- Calculate fret positions for various temperament

## Usage

- Calculate things during daily guitar making work (for guitar makers).
- Learn Spring Boot and AngularJS (for startup programmers).

## Supported language

Japanese and English. The app looks into browser language setting then changes display language.


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

## Issues and enhancement request

Please leave issues under the Issues tab. Enhancement requests are welcome. If you have a enhancement request, leave your comment as well.

## License

fret-calculator is available under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.