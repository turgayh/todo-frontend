import { mount } from 'enzyme';
import TodoAppPage from './TodoAppPage';
describe("Container TodoAppPage", () => {
    test("TodoAppPage should be render", () => {
        const wrapper = mount(<TodoAppPage />);
        expect(wrapper.exists()).toBe(true);

    })
})
