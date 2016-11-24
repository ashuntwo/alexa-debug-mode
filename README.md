# alexa-debug-mode

A reusable voice component for an Alexa skill. Here's what it sounds like:

User (to your skill): set debug on  
Your skill: Debug is now on.

The way alexa-debug-mode works is that it calls a toggle function that you pass to it with a value indicating whether debug should be turned on or off. Your toggle function is responsible for persisting this preference. You can use the debug mode preference as you see fit in your code. The Magic Door uses debug mode during developer voice testing before release: The Magic Door changes prompts so that they read back the user's intent when in debug mode.

Here's how you use it:

1. Include the debug intents in your intents schema. 
2. Include the debug samples in your samples.txt. 
3. Include the debug slot types in your interaction model.
4. Construct and call the Debug intent handler when you receive a Debug intent.

# Intent Schema

Alexa-debug-mode defines an intent that must appear in your Alexa intent schema. You can get the definition like this: 

<code>require('alexa-debug-mode').intents</code>

# Samples

Alexa-debug-mode defines samples that must appear in your Alexa samples file. You can get them like this: 

<code>require('alexa-debug-mode').samples</code>

# Slot Types

Alexa-debug-mode defines slot types that must appear in your Alexa interaction model. You can get them like this:

<code>require('alexa-debug-mode').slotTypes</code>

# Calling the Code

When the user expresses the Debug intent, you'll get an IntentRequest from Alexa. Call the alexa-debug-mode code when you get this request:

<code>var responseText = require('alexa-debug-mode').Debug(request);</code>

ResponseText will look something like this:  
<code>Debug is now on.</code>

You'll need to include this in a full response to Alexa.