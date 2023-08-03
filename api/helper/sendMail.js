import nodemailer from "nodemailer";

/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */
export const sendActivationLink = async (to, data) => {
  // create trams transport
  let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // send activation mail
    await transport.sendMail({
      from: `Dashboard<${process.env.MAIL_ID}>`,
      subject: `E-commarce dashboard`,
      to: to,
      text: "check your link",
      html: `<body style="padding: 0; margin: 0"> <center class="wrapper" style=" width: 100%; table-layout: fixed; background-color: #ddd; padding-top: 30px; padding-bottom: 30px; " > <table class="main" style=" background-color: #fff; color: rgb(37, 36, 36); width: 100%; max-width: 600px; margin: 0 auto; border-spacing: 0; font-family: sans-serif; padding: 20px; " > <!-- Header section --> <tr> <td height="16" style="padding: 0; background-color: #fff" class="header-section" > <table width="100%" style="border-spacing: 0"> <tr> <td class="two-collum" style="padding: 0; text-align: left"> <table width="100%" style="border-spacing: 0; border-bottom: 1px solid #ddd" > <tr> <td class="colum1" style=" padding: 0; width: 100%; max-width: 80px; height: 100%; display: inline-block; vertical-align: top; " > <a href="http://localhost:3000/" style="text-decoration: none" > </a> </td> <td class="colum2" style=" padding: 0; width: 100%; max-width: 400px; display: inline-block; vertical-align: top; " > <h4 style="color: #2377f2" class="header-tittle"> Action required: Confirm Your Dashboard Account </h4> </td> </tr> </table> </td> </tr> </table> </td> </tr> <!-- body Section --> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="recever-name" style="padding: 0"> <p style="color: rgb(35, 35, 35)">Hi, ${data.name}</p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 0 10px"> <tr> <td class="message-name" style="padding: 0"> <p style="color: rgb(35, 35, 35); margin: 0"> You recently Registered for E-commerce dashboard, To complete your E-commerce dashboard registration, please confirm your account </p> </td> </tr> </table> </td> </tr> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style="border-spacing: 0; padding: 30px 10px"> <tr> <td class="message-name" style=" padding: 0; margin-top: 15px; display: flex; justify-content: center; " > <a href="${data.link}" style="text-decoration: none"> <button style=" padding: 10px; background-color: #2377f2; color: #fff; border: none; outline: none; border-radius: 4px; cursor: pointer; " > Confirm Your Account </button></a > </td> </tr> </table> </td> </tr> <!-- body Section --> <!-- footer section --> <tr> <td class="body-section" style="padding: 0; background-color: #fff"> <table width="100%" style=" border-spacing: 0; padding: 0 10px; border-top: 1px solid #ddd; margin-top: 40px; " > <tr> <td class="recever-name" style="padding: 0"> <p style="color: rgb(35, 35, 35); font-size: 13px"> This message was sent to <span style="color: #2377f2">${data.email}</span> at your request </p> </td> </tr> </table> </td> </tr> </table> </center> </body>`,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */
export const sentForgotPasswordLink = async (to, data) => {
  // create trams transport
  let transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // send activation mail
    await transport.sendMail({
      from: `Dashboard<${process.env.MAIL_ID}>`,
      subject: `${data.name} we've made it easy to get back on Dashboard`,
      to: to,
      text: "check your link",
      html: `
            
            <body style="padding:0;margin:0;">
    <center class="wrapper" style="width:100%;table-layout:fixed;background-color:#ffffff;padding-top:30px;padding-bottom:30px;">
      <table class="main" style="background-color:#fff;color:rgb(37, 36, 36); width:100%;max-width:430px; height: 410px; margin:0 auto;border-spacing:0;font-family:sans-serif;padding: 20px;">
        <!-- Header section -->
        <tr>
          <td height="16" style="padding:0;background-color: #fff;" class="header-section">
            <table width="100%" style="border-spacing:0;">
              <tr>
                <td class="two-collum" style="padding:0;text-align:left;">
                  <table width="100%" style="border-spacing:0;">
                    <tr>
                      <td class="colum1" style="padding:0;width:100%;max-width:80px;height:100%;display:inline-block;vertical-align:top;">
                        <a href="http://localhost:3000/" style="text-decoration:none;">
                          <img style="border:0;padding-top: 10px;" width="180"  src="https://ci4.googleusercontent.com/proxy/vHv3tRtE3I_2w6zR6JFt066OaSywcGpzkuO02W6QMIeOfCWNMc-TyEJKxu4mG2hoBsYBLNnCt6VSzhJNl2kOXcZTRdglv3R20xUvvc29ow=s0-d-e1-ft#https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/Otjcwa2eCOF.png" alt="Facebook-logo" border="0">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- body Section -->
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="recever-name" style="padding:0;">
                  <p style="color: #565a5c; margin: 0; margin:15px 0px; font-size: 18px;">Hi, ${data.name}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color:#565a5c; margin: 0; line-height: 25px; font-size: 18px;">
                    Sorry to hear you’re having trouble logging into Instagram. We got a message that you forgot your password. If this was you, you can get right back into your account or reset your password now.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 30px 10px; text-align: center;">
              <tr>
                <td class="message-name" style="padding:0;">
                 <a style="padding: 20px 112px; background-color:#47a2ea; border-radius: 5px; font-size: 18px; font-weight: 600;border: none; outline: none; cursor: pointer;" href=${data.loginAsAccountLink}><button style=" margin-top: 10px; color:#f2fdfd; background-color: #47a2ea; font-size: 18px; font-weight: 600;border: none; outline: none; cursor: pointer;">Log in as ${data.name}</button></a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 30px 10px; text-align: center;">
              <tr>
                <td class="message-name" style="padding:0;">
                 <a style="padding: 20px 90px; background-color:#47a2ea; border-radius: 5px; font-size: 18px; font-weight: 600;border: none; outline: none; cursor: pointer;" href=${data.resetPassowrdLink}><button style=" margin-top: 10px; color:#f2fdfd; background-color: #47a2ea; font-size: 18px; font-weight: 600;border: none; outline: none; cursor: pointer;">Reset your password</button></a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color:#565a5c; margin: 0; line-height: 25px; font-size: 16px; margin-bottom: 20px;">
                    If you didn’t request a login link or a password reset, you can ignore this message and <a style="color:#47a2ea;" href="https://help.instagram.com/231141655544451">learn more about why you may have received it.</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0;">
                  <p style="color:#565a5c; margin: 0; line-height: 25px; font-size: 16px;">
                    Only people who know your Instagram password or click the login link in this email can log into your account.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="body-section" style="padding:0;background-color: #fff;">
            <table width="100%" style="border-spacing:0;padding: 0 10px;">
              <tr>
                <td class="message-name" style="padding:0; text-align: center;">
                  <img style="width:50px; height:30px;" src="https://ci4.googleusercontent.com/proxy/EJZbh4o__ilxW-Qeu9CLvNAN7DS93sdYd0ZWHbRbsuZTMeA01I_dPjJ8ksrB2zX5CDoDyOrShH2RhVZy5cghftAAEMZI0T10gEk20cA2OA=s0-d-e1-ft#https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Bqo9-L659wB.png" alt="">
                  <p style="color: rgb(157, 157, 157); font-weight: 300; margin: 0; font-size: 12px;">© Instagram. Meta Platforms, Inc., 1601 Willow Road, Menlo Park, CA 94025
                    This message was sent to ${data.email} and intended for jannatun1t. Not your account? <a style="color: rgb(157, 157, 157);" href="#"> Remove your email</a> from this account.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- body Section -->
      </table>
    </center>
</body>

            `,
    });
  } catch (error) {
    next(error);
  }
};
/**
 * Send Account Activation
 * @param {*} to
 * @param {*} data
 */
export const sendMail = ({ to, sub, msg }) => {
  // create trams transport
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "azam1.english@gmail.com",
      pass: "drdubjcsiffbpoly",
    },
  });

  // send activation mail
  transport.sendMail({
    from: `Wolmart <${to}>`,
    to: to,
    subject: sub,
    text: msg,
  });
};
