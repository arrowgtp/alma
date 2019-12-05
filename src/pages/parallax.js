import React, { useRef, useEffect } from 'react'
import lax from 'lax.js';
import styled from 'styled-components'

// import { useLax } from 'use-lax'

function useLax() {
  const requestRef = useRef();

  useEffect(() => {
    lax.setup() // initialization
    const element = document.querySelector('#scroller') // Find your scrollable element

    const updateLax = () => {
      lax.update(element.scrollTop) // pass in the elements scrolled position
      requestRef.current = window.requestAnimationFrame(updateLax);
    };

    requestRef.current = window.requestAnimationFrame(updateLax);

    return () => {
      if (requestRef.current) {
        window.cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
}

const Scroller = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 80vh;
  overflow-x: none;
  overflow-y: scroll;
  border: 1px solid black;
  background: black;

  @media(orientation: landscape) {
    width: 80vw;
    height: 80vh;
  }
`

const Section = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80vh;
  background: grey;
  border: 1px solid red;
  position: relative;
`

const Rect1 = styled.div`
  margin: 0;
  /* margin-top: -1000px; */
  padding: 0;
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 0;
  background: #111;
  z-index: 1;
`

const Rect2 = styled.div`
  margin: 0;
  /* margin-top: -500px; */
  padding: 0;
  width: 100%;
  height: 80vh; 
  position: absolute;
  /* top: 30vh; */
  background: #333;
  z-index: 2;
`

const Rect3 = styled.div`
  margin: 0;
  /* margin-top: -250px; */
  padding: 0;
  width: 100%;
  height: 80vh;
  position: absolute;
  /* top: 55vh; */
  background: #666;
  z-index: 3;
`

const Rect4 = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80vh;
  position: absolute;
  /* top: 70vh; */
  background: #999;
  z-index: 4;
`

const Parallax = () => {

  useLax()

  return (
    <Scroller id='scroller'>
      <Section>
        <Rect1 className="lax" data-lax-preset="lazy-1000"></Rect1>
        <Rect2 className="lax" data-lax-preset="lazy-500"></Rect2>
        <Rect3 className="lax" data-lax-preset="lazy-250"></Rect3>
        <Rect4 className="lax" data-lax-preset="lazy-0"></Rect4>
      </Section>
      <div id="section1" className="section">
        <div className="left">
          <div
            className="lax bubble a"
            style={{ background: '#EDD943' }}
            data-lax-preset="lazy-250"
          />

          <div
            className="lax bubble c"
            style={{ background: '#ED2471', marginLeft: '80pt' }}
            data-lax-preset="lazy-100"
          />

          <div
            className="lax bubble b"
            style={{ background: '#35D5E5', marginLeft: '160pt' }}
            data-lax-preset="lazy-300"
          />

          <h3
            data-lax-preset="driftRight"
            data-lax-optimize="true"
            className="lax chunkyText"
            style={{ color: '#35D5E5' }}
          >
            oooh!
          </h3>
        </div>

        <div className="right">
          <div
            className="lax bubble a"
            style={{ background: '#35D5E5', marginLeft: '120pt' }}
            data-lax-preset="lazy-200"
          />

          <div
            className="lax bubble c"
            style={{ background: '#EDD943', marginLeft: '-20pt' }}
            data-lax-preset="lazy-150"
          />

          <div
            className="lax bubble b"
            style={{
              background: '#ED2471',
              marginLeft: '20pt',
              marginTop: '200pt',
            }}
            data-lax-preset="lazy-350"
          />
          <h3
            data-lax-optimize="true"
            data-lax-preset="driftLeft"
            className="lax chunkyText"
            style={{ color: '#ED2471', marginTop: '200pt' }}
          >
            aaah!
          </h3>
        </div>

        <h3
          data-lax-preset="crazy zoomInOut"
          className="lax crazyText"
          data-lax-optimize="true"
        >
          sooo crazy
        </h3>
      </div>
      <div id="section2" className="section">
        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.1 fadeInOut"
        >
          <div
            className="lax block"
            style={{ background: '#35D5E5' }}
            data-lax-preset="spin"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.2 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#EDD943',
              marginTop: '-50pt',
              marginLeft: '-50pt',
              width: '40pt',
              height: '40pt',
            }}
            data-lax-preset="spinRev-500"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.4 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#ED2471',
              marginTop: '-90pt',
              marginLeft: '-0pt',
            }}
            data-lax-preset="spin-500"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.5 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#EDD943',
              marginTop: '70pt',
              marginLeft: '-150pt',
              width: '40pt',
              height: '40pt',
            }}
            data-lax-preset="spinRev-500"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.3 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#EDD943',
              marginTop: '100pt',
              marginLeft: '-60pt',
              width: '25pt',
              height: '25pt',
            }}
            data-lax-preset="spin-500"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.05 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#ED2471',
              marginTop: '-30pt',
              marginLeft: '-70pt',
            }}
            data-lax-preset="spin"
          />
        </div>

        <h3
          data-lax-preset="leftToRight-0.8 speedy"
          data-lax-optimize="true"
          className="lax chunkyText"
          style={{
            color: 'white',
            position: 'absolute',
            marginTop: '-20pt',
            marginLeft: '-100pt',
          }}
        >
          wheee!
        </h3>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.15 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#35D5E5',
              marginTop: '-70pt',
              marginLeft: '-20pt',
              width: '40pt',
              height: '40pt',
            }}
            data-lax-preset="spinRev-500"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.45 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#ED2471',
              marginTop: '-50pt',
              marginLeft: '-50pt',
              width: '25pt',
              height: '25pt',
            }}
            data-lax-preset="spin-500"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.5 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#35D5E5',
              marginTop: '30pt',
              marginLeft: '-20pt',
            }}
            data-lax-preset="spinRev-500"
          />
        </div>

        <div
          className="lax blockContainer"
          data-lax-preset="leftToRight-1.25 fadeInOut"
        >
          <div
            className="lax block"
            style={{
              background: '#ED2471',
              marginTop: '80pt',
              marginLeft: '-10pt',
            }}
            data-lax-preset="spin-500"
          />
        </div>
      </div>
      <div id="section3" className="section">
      <p className="lax" data-lax-preset="linger" data-lax-optimize="true">
        Harness the power of scrolling and make your websites come alive!
      </p>
      <a
        className="lax button"
        data-lax-preset="linger"
        data-lax-optimize="true"
        data-lax-bg-pos-x="0 0, 3000 1000"
        href="https://github.com/alexfoxy/laxxx"
      >
        Get lax.js
      </a>
    </div>
    </Scroller>
  )
}

export default Parallax