import { create } from 'react-test-renderer';
import ProfileStatus from '../components/Profile/ProfileInfo/components/ProfileStatus/ProfileStatus.jsx'

describe("ProfileStatus component", () => {
  test("after creation span should be displayed with correct status", () => {
    const component = create(<ProfileStatus status='Hello, mst Putin' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })
  test("after creation span should be displayed with correct status", () => {
    const component = create(<ProfileStatus status='Hello, mst Putin' />)
    const root = component.root
    expect(() => {
      const input = root.findByType('input')
    }).toThrow()
  })
  test("after creation span should contains correct status", () => {
    const component = create(<ProfileStatus status='Hello, mst Putin' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[0]).toBe('Hello, mst Putin')
  })
  test("input should be displayed in edit mode instead of span", () => {
    const component = create(<ProfileStatus status='Hello, mst Putin' />)
    const root = component.root
    const span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')
    expect(input.props.value).toBe('Hello, mst Putin')
  })
  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status='Hello, mst Putin' updateStatus={mockCallback}/>)
    const root = component.root
    const span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')
    input.props.onBlur()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
