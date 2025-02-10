import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerInfo from './CustomerInfo';
import { CheckoutProvider } from '../../context/Checkout/CheckoutContext';

// Mock the useCheckout hook
const mockSetCustomerInfo = jest.fn();
jest.mock('../../hooks/useCheckout', () => ({
  __esModule: true,
  default: () => ({
    customerInfo: {
      firstName: '',
      lastName: '',
      document: { type: '', number: '' },
      address: {
        city: '', 
        street: '', 
        number: '', 
        country: '', 
        state: '', 
        neighborhood: ''
      }
    },
    setCustomerInfo: mockSetCustomerInfo
  })
}));

describe('CustomerInfo Component', () => {
  const renderComponent = () => {
    return render(
      <CheckoutProvider>
        <CustomerInfo />
      </CheckoutProvider>
    );
  };

  beforeEach(() => {
    mockSetCustomerInfo.mockClear();
  });
  test('renders document type select', () => {
    renderComponent();
    
    const documentTypeSelect = screen.getByText('Selecione o tipo de documento');
    expect(documentTypeSelect).toBeInTheDocument();
  });

  test('updates firstName correctly', () => {
    renderComponent();
    
    const firstNameInput = screen.getByPlaceholderText('Nome');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    expect(mockSetCustomerInfo).toHaveBeenCalledWith(expect.any(Function));
  });

  test('updates nested address fields correctly', () => {
    renderComponent();
    
    const streetInput = screen.getByPlaceholderText('Rua');
    fireEvent.change(streetInput, { target: { value: 'Main Street' } });

    expect(mockSetCustomerInfo).toHaveBeenCalledWith(expect.any(Function));
  });

  test('updates document number correctly', () => {
    renderComponent();
    
    const documentInput = screen.getByPlaceholderText('Número do documento');
    fireEvent.change(documentInput, { target: { value: '12345678901' } });

    expect(mockSetCustomerInfo).toHaveBeenCalledWith(expect.any(Function));
  });
});