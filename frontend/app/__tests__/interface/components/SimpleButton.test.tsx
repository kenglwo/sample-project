import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { SimpleButton } from "../../../app/interface/components/SimpleButton";
 
describe("ボタンをクリックするとON/OFFの表示が切り替わる", () => {
    it('render a component', () => {
      render(<SimpleButton />);
      const simpleButton = screen.getByRole("button");
      expect(simpleButton).toHaveTextContent("OFF");
    })
});
