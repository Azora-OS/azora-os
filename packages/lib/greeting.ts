/*
AZORA PROPRIETARY LICENSE
Copyright (c) 2025 Azora ES (Pty) Ltd. All Rights Reserved.
See LICENSE file for details.
*/

/**
 * Greeting configuration options
 */
export interface GreetingOptions {
  name?: string;
  timeZone?: string;
}

/**
 * Gets the appropriate greeting based on the current time of day
 * @param hour - The current hour (0-23)
 * @returns The time-appropriate greeting
 */
function getTimeBasedGreeting(hour: number): string {
  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon';
  } else if (hour >= 17 && hour < 21) {
    return 'Good evening';
  } else {
    return 'Hello';
  }
}

/**
 * Generates a personalized greeting message for Azora users
 * @param options - Optional greeting configuration
 * @returns A personalized greeting message
 */
export function greet(options: GreetingOptions = {}): string {
  const { name, timeZone } = options;

  const now = timeZone
    ? new Date(new Date().toLocaleString('en-US', { timeZone }))
    : new Date();

  const hour = now.getHours();
  const timeGreeting = getTimeBasedGreeting(hour);

  if (name) {
    return `${timeGreeting}, ${name}! Welcome to Azora.`;
  }

  return `${timeGreeting}! Welcome to Azora.`;
}

/**
 * Generates a welcome message for new Azora users
 * @param name - The user's name
 * @returns A welcome message
 */
export function welcomeNewUser(name?: string): string {
  if (name) {
    return `Welcome to Azora, ${name}! We're excited to have you join our community. Ngiyakwazi ngoba sikwazi - I can because we can.`;
  }
  return `Welcome to Azora! We're excited to have you join our community. Ngiyakwazi ngoba sikwazi - I can because we can.`;
}

export default { greet, welcomeNewUser };
