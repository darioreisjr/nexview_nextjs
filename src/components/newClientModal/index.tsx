'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogOverlay } from '../ui/dialog';

export const NewClientModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal}>Add New Client</Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay />
        <DialogContent className="p-4 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">New Client</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 p-2 border w-full rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 p-2 border w-full rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={closeModal} className="mr-2">
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
