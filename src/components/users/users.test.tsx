import { render, screen } from '@testing-library/react'
import {Users} from './users'
import { API } from '../../server/server';

describe('Users component', () => {
  it('should show all users', () => {
    const user = API.getFirstUser();
    render(<Users/>);
    const component = screen.getByTestId("users-select"); 
    expect(component).toHaveTextContent(user)
  })
})