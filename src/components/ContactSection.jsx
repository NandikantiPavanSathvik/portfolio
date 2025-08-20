import { GithubIcon, Linkedin, Mail, Send } from "lucide-react";
import {cn} from '../lib/utils'
import {useToast} from '../hooks/useToast'
import { useState } from "react";

export const ContactSection = () => {
     
  const{success}=useToast();
  const[isSubmitting,setIsSubmitting]=useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const payload = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };

  try {
   const res = await fetch("https://script.google.com/macros/s/AKfycbxnWv4AXSvMQJeZdaB7GNZXwzuX329ztxPC60IOxEZVYO7SHBvldebwdAIhm-SAzuZS/exec",
  {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: new URLSearchParams(payload).toString(),
  }
);


    if (!res.ok) throw new Error(`Network error: ${res.status}`);

    const json = await res.json();
    if (json.result === "Success" ) {
      success("Message sent! Thank you");
      e.target.reset(); // clear the form
    } else {
      success("Something went wrong. Try again.");
    }
  } catch (err) {
    success("Failed to send: " + err.message);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want collaborate? Feel free to reach out. I'm
          always open to discussing new oppourtunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div >
                    {/* <h4 className="font-medium">Email</h4> */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pavansathviknandikanti@gmail.com" 
                    className="text-muted hover:text-primary transition-colors">
                        Mail Me
                    </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div >
                     {/* <h4 className="font-medium">Linkdin</h4> */}
                    <a href="https://www.linkedin.com/in/pavannandikanti/" 
                    className="text-muted hover:text-primary transition-colors">
                       Connect
                    </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <GithubIcon className="h-6 w-6 text-primary"/>
                </div>
                <div >
                    {/* <h4 className="font-medium">Email</h4> */}
                    <a  href="https://github.com/NandikantiPavanSathvik"
                    className="text-muted hover:text-primary transition-colors">
                        Github
                    </a>
                </div>
              </div>
            </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs"  >
                <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                <form className="space-y-6 " onSubmit={handleSubmit}>
                    <div>
                        <label htmlfor="name"className="block text-sm font-medium mb-2" > Your Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Name">
                        </input>
                    </div>
                     <div>
                        <label htmlfor="email"className="block text-sm font-medium mb-2" > Your Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="...@gmail.com">
                        </input>
                    </div>
                     <div>
                        <label htmlfor="message"className="block text-sm font-medium mb-2" > Your Message</label>
                        <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Hello">
                        </textarea>
                    </div>
                    <button
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn("cosmic-button w-full flex items-center justify-center gap-2"

                    )}
                    >
                       {isSubmitting ? "Sending...": "SendMessage"} 
                        <Send size={16} />
                    </button>

                </form>

            </div>

        </div>
      </div>
    </section>
  );
};
