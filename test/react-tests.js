/* eslint-env mocha */
import React from 'react/addons';

const {TestUtils} = React.addons;
const {expect} = chai;

describe('React components', () => {
  it('should find valid xpath in react component', () => {
    const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
    expect(component).to.have.xpath('//blink')
  });

  describe("when it does not find valid xpath in react component", () => {
    it('should throw', () => {
      const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
      expect(() => {
        expect(component).to.have.xpath('//h1')
      }).to.throw('to have xpath \'//h1\'');
    });

    it('should throw with outerHTML of the component', () => {
      const component = TestUtils.renderIntoDocument(<blink>hi</blink>);
      expect(() => {
        expect(component).to.have.xpath('//h1')
      }).to.throw('<blink data-reactid=".2">hi</blink>');
    });
  })
});