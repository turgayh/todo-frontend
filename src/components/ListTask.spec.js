import { shallow } from 'enzyme';
import { ListTask } from './index';
describe("Component ListTask", () => {
    test("ListTask should be render", () => {
        const wrapper = shallow(<ListTask tasks={[{ key: 1, index: 1, todo: "task 1" }]} />);
        expect(wrapper.exists()).toBe(true)

    })
})
