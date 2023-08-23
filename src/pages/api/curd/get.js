// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ name: 'Manikandan Ravi', Designation: 'Automation & DevOps Engineer' })
    }
     else {
      // Handle any other HTTP method
      res.status(400).json({ error: 'Error-Get route path, no other methods liek POST, PUT or DELETE' })
    }
  }