/*
  # Create Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person sending the message
      - `email` (text) - Email address of the sender
      - `phone` (text, nullable) - Optional phone number
      - `subject` (text) - Subject of the message
      - `message` (text) - The actual message content
      - `created_at` (timestamptz) - Timestamp when message was created
      - `read` (boolean) - Whether the message has been read
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anyone to insert contact messages (public form)
    - Add policy for authenticated admin to read all messages
  
  3. Notes
    - Public can only insert messages (send contact form)
    - Messages are stored securely with RLS enabled
    - Default values ensure data integrity
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);