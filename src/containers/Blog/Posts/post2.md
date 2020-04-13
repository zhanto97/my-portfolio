# Creating Facebook Messenger Chatbot

At the most fundamental level, chatbot applications serve the purpose of automating some of the tedious tasks.
For businesses, every minute of holding customers waiting costs money.
Therefore, more and more businesses opt for creating a chatbot for providing some sort of services that require no human involvement.

In this blog post, I will discuss how to create a Facebook Messenger chatbot using Python's [Flask](https://flask.palletsprojects.com/) framework.
Chatbot created in this post will simply serve the purpose of echoing back the message sent by the user.

## Create app on Facebook

Go to [Facebook for Developers](https://developers.facebook.com/apps) and create an app with your preferred name.
After creation, press `Set Up` button on `Messenger` option as shown on image below.
![set up messenger](https://raw.githubusercontent.com/zhanto97/example-chatbot/master/assets/post2-image1.png)

After that, you have to create a new Facebook Page (such as a Public Community).
![create page](https://raw.githubusercontent.com/zhanto97/example-chatbot/master/assets/post2-image2.png)

Now, generate access token for your app and copy it somewhere for now.
It will be used for verification and sending messages from your chatbot application.
![generate token](https://raw.githubusercontent.com/zhanto97/example-chatbot/master/assets/post2-image3.png)

## Implement chatbot

Starting with the following skeleton code (`app.py`),
```
import os
from flask import Flask, request
from pymessenger.bot import Bot

app = Flask(__name__)
ACCESS_TOKEN = os.getenv('ACCESS_TOKEN')
VERIFY_TOKEN = os.getenv('VERIFY_TOKEN')
bot = Bot(ACCESS_TOKEN)

@app.route('/')
def index():
    return "<h1>Welcome to my bot!</h1>"

@app.route("/webhook", methods=['GET', 'POST'])
def receive_message():
    if request.method == 'GET':
        token_sent = request.args.get("hub.verify_token")
        return verify_fb_token(token_sent)
    return "Message Processed"

def verify_fb_token(token_sent):
    if token_sent == VERIFY_TOKEN:
        return request.args.get("hub.challenge")
    return 'Invalid verification token'

if __name__ == "__main__":
    app.run("0.0.0.0", 5000)
```

create and activate a new virtual environment by running following scripts in the terminal.
```
python3 -m venv venv
source venv/bin/activate
```
Then, install `flask` and `pymessenger` by running
```
pip3 install flask
pip3 install pymessenger
```
You will need a verify token for your chatbot. This is just any string of your choice. It is used in registering a webhook for events.
Export access token and verify token environment variables by running
```
export ACCESS_TOKEN=<your generated access token>
export VERIFY_TOKEN=<verify-token-of-your-choice>
```
And finally, run the bot.
```
python3 app.py
```

## Expose chatbot and register webhook

From the previous step, `flask` app is running locally and Facebook Messenger Server can't reach it.
Therefore, you have to expose your chatbot application to public internet. This can be achieved by using `ngrok`.
Download `ngrok` and expose port `5000` by running `./ngrok http 5000`.
This will give an address of the form `https://XXXXXXX.ngrok.io`.

Go to Facebook for Developers page of your application and register webhook (callback URL) for it.

For `Callback URL`, paste in `ngrok` address + `/webhook` e.g. `https://XXXXXXX.ngrok.io/webhook`.

For `Verify Token`, paste in the verify token that you chose previously.
![webhook](https://raw.githubusercontent.com/zhanto97/example-chatbot/master/assets/post2-image4.png)

After that, add `messages` and `messaging_postbacks` subscriptions
![subscriptions](https://raw.githubusercontent.com/zhanto97/example-chatbot/master/assets/post2-image5.png)

## Congratulations!

Messages you send to your chatbot can now be received by your application running locally. You can now add the logic of your choice.
For example, following code echoes back the message from user.
```
@app.route("/webhook", methods=['GET', 'POST'])
def receive_message():
    if request.method == 'GET':
        token_sent = request.args.get("hub.verify_token")
        return verify_fb_token(token_sent)
    else:
       output = request.get_json()
       for event in output['entry']:
          messaging = event['messaging']
          for message in messaging:
            recipient_id = message['sender']['id']
            if message.get('message'):
                if message['message'].get('text'):
                    received = message['message'].get('text')
                    bot.send_text_message(recipient_id, "echo: " + received)
    return "Message Processed"
```

Hosting this chatbot at a service like [Heroku](https://heroku.com) deserves another blog post :)

Full code can be found in my [repository](https://github.com/zhanto97/example-chatbot)