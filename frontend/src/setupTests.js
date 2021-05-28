import App from './App';
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it("renders correctly", () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });
