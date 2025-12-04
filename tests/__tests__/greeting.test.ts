/**
 * Unit tests for the greeting module
 */
import { greet, welcomeNewUser } from '../../packages/lib/greeting';

describe('Greeting Module', () => {
  describe('greet function', () => {
    it('should return a basic greeting without options', () => {
      const result = greet();
      expect(result).toContain('Welcome to Azora');
    });

    it('should include the name when provided', () => {
      const result = greet({ name: 'John' });
      expect(result).toContain('John');
      expect(result).toContain('Welcome to Azora');
    });

    it('should return "Good morning" for morning hours', () => {
      // Mock Date to return 9 AM
      const originalDate = Date;
      const mockDate = new Date('2025-01-01T09:00:00');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const result = greet();
      expect(result).toContain('Good morning');

      global.Date = originalDate;
      jest.restoreAllMocks();
    });

    it('should return "Good afternoon" for afternoon hours', () => {
      const originalDate = Date;
      const mockDate = new Date('2025-01-01T14:00:00');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const result = greet();
      expect(result).toContain('Good afternoon');

      global.Date = originalDate;
      jest.restoreAllMocks();
    });

    it('should return "Good evening" for evening hours', () => {
      const originalDate = Date;
      const mockDate = new Date('2025-01-01T19:00:00');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const result = greet();
      expect(result).toContain('Good evening');

      global.Date = originalDate;
      jest.restoreAllMocks();
    });

    it('should return "Hello" for late night hours', () => {
      const originalDate = Date;
      const mockDate = new Date('2025-01-01T23:00:00');
      jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

      const result = greet();
      expect(result).toContain('Hello');

      global.Date = originalDate;
      jest.restoreAllMocks();
    });
  });

  describe('welcomeNewUser function', () => {
    it('should return a welcome message without name', () => {
      const result = welcomeNewUser();
      expect(result).toContain('Welcome to Azora');
      expect(result).toContain('Ngiyakwazi ngoba sikwazi');
    });

    it('should include the name when provided', () => {
      const result = welcomeNewUser('Alice');
      expect(result).toContain('Welcome to Azora, Alice');
      expect(result).toContain('Ngiyakwazi ngoba sikwazi');
    });
  });
});
