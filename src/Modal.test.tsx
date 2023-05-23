import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './components/Modal';

describe('Modal', () => {
  test('renders modal content when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
    expect(getByText('This is the content of the modal.')).toBeInTheDocument();
  });

  test('does not render modal content when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    );

    expect(queryByText('Modal Content')).toBeNull();
    expect(queryByText('This is the content of the modal.')).toBeNull();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    );

    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
