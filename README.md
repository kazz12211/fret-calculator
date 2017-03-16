# fret-calculator

Calculator application for guitar makers.
This application is hosted on heroku at <a href="https://guitar-calc.herokuapp.com" target="__blank">https://guitar-calc.herokuapp.com</a>.

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

## About a creator of this application

I'm a freelance programmer and a guitar maker at Tsubaki Kougei (name of our workshop) in Japan. 
The workshop delivers customer guitars, wooden products, leather craft products and canvas products locally.
The workshop blog is <a href="http://tsubakicraft.wordpress.com" target="__blank">http://tsubakicraft.wordpress.com</a>.
