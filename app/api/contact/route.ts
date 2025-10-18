import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { fullName, workEmail, companyName, message } = await request.json()

    // Validate required fields
    if (!fullName || !workEmail || !companyName || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New contact form submission from Augment Labs website:

Name: ${fullName}
Email: ${workEmail}
Company: ${companyName}

Message:
${message}

---
This message was sent from the Augment Labs contact form.
    `.trim()

    // For now, we'll just log the email content and return success
    // In production, you would integrate with an email service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - Formspree
    // - EmailJS
    
    console.log('Contact form submission:', {
      fullName,
      workEmail,
      companyName,
      message,
      timestamp: new Date().toISOString()
    })

    // TODO: Replace this with actual email sending logic
    // For immediate testing, you can:
    // 1. Set up Resend account and add RESEND_API_KEY to environment variables
    // 2. Or use a service like Formspree for quick setup
    // 3. Or implement SMTP with Nodemailer

    return NextResponse.json(
      { message: 'Form submitted successfully. Email functionality needs to be configured.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    )
  }
}
