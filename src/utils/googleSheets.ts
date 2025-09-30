// Google Sheets Integration Utility
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
}

export const submitToGoogleSheets = async (formData: ContactFormData): Promise<SubmissionResponse> => {
  try {
    // Get the Google Apps Script URL from environment variables
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google Script URL not configured');
      return {
        success: false,
        message: 'Configuration error. Please try again later.'
      };
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
      source: 'CodeOven Website'
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Use no-cors to avoid CORS issues
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // With no-cors mode, we can't check response status
    // We assume success if no error is thrown during fetch
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    };

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    
    // Return user-friendly error message
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
    };
  }
};

// Validation helper
export const validateFormData = (formData: ContactFormData): string | null => {
  if (!formData.name.trim()) {
    return 'Please enter your name';
  }
  
  if (!formData.email.trim()) {
    return 'Please enter your email address';
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email.trim())) {
    return 'Please enter a valid email address';
  }
  
  if (!formData.message.trim()) {
    return 'Please enter a message';
  }
  
  if (formData.message.trim().length < 10) {
    return 'Please enter a message with at least 10 characters';
  }
  
  return null; // No validation errors
};