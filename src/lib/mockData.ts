export const mockLeads = [
  { id: '1', name: 'Sarah Miller', phone: '+1 (555) 123-4567', stage: 'new', score: 85, created_at: '2023-10-25T10:30:00Z', data: { 'Reason': 'Checkup', 'Budget': '$100-200' } },
  { id: '2', name: 'Michael Chen', phone: '+1 (555) 987-6543', stage: 'qualified', score: 92, created_at: '2023-10-24T14:15:00Z', data: { 'Reason': 'Root Canal', 'Pain Level': 'High' } },
  { id: '3', name: 'Emma Wilson', phone: '+1 (555) 456-7890', stage: 'booked', score: 70, created_at: '2023-10-24T09:00:00Z', data: { 'Reason': 'Whitening' } },
  { id: '4', name: 'James Rod', phone: '+1 (555) 222-3333', stage: 'new', score: 45, created_at: '2023-10-23T16:45:00Z', data: { 'Reason': 'General Inquiry' } },
  { id: '5', name: 'Alice Keys', phone: '+1 (555) 777-8888', stage: 'won', score: 100, created_at: '2023-10-22T11:20:00Z', data: { 'Reason': 'Implants' } },
];

export const mockConversations = [
  { 
    id: '1', 
    contact_phone: '+1 (555) 123-4567', 
    contact_name: 'Sarah Miller',
    status: 'active', 
    last_message: 'Does 2 PM work for you?', 
    last_message_at: '10:32 AM',
    unread: 2,
    messages: [
      { id: '1', direction: 'in', body: 'Hi, I need a checkup.', created_at: '10:30 AM' },
      { id: '2', direction: 'out', body: 'Sure! What time works best?', created_at: '10:31 AM' },
      { id: '3', direction: 'in', body: 'Does 2 PM work for you?', created_at: '10:32 AM' },
    ]
  },
  { 
    id: '2', 
    contact_phone: '+1 (555) 987-6543', 
    contact_name: 'Michael Chen',
    status: 'needs_human', 
    last_message: 'I need to speak to a doctor.', 
    last_message_at: 'Yesterday',
    unread: 0,
    messages: [
      { id: '1', direction: 'in', body: 'I have severe pain.', created_at: 'Yesterday' },
      { id: '2', direction: 'in', body: 'I need to speak to a doctor.', created_at: 'Yesterday' },
    ]
  },
  { 
    id: '3', 
    contact_phone: '+1 (555) 456-7890', 
    contact_name: 'Emma Wilson',
    status: 'closed', 
    last_message: 'See you then!', 
    last_message_at: 'Oct 24',
    unread: 0,
    messages: []
  }
];

export const mockKB = [
  { id: '1', keywords: 'price, cost', answer: 'Our consultation fee is $50. Treatments vary by complexity.' },
  { id: '2', keywords: 'location, address', answer: 'We are located at 123 Health Blvd, Suite 400.' },
  { id: '3', keywords: 'hours, open', answer: 'We are open Mon-Fri from 9 AM to 6 PM.' },
];

export const mockStats = {
  total_leads: 124,
  new_bookings: 18,
  active_conversations: 5,
  conversion_rate: 12.5
};
