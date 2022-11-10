import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold">
          SQL vs NoSQL: Differences, Databases, and Decisions
        </h2>
        <p className="my-5">
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
        <p>
          SQL has been around for over 40 years, so it is recognizable,
          documented, and widely-used. Safe and versatile, it’s particularly
          well suited for complex queries. However, SQL restricts the user to
          working within a predefined tabular schema, and more care must be
          taken to organize and understand the data before it is used. The
          dynamic schemata of NoSQL databases allow representation of
          alternative structures, often alongside each other, encouraging
          greater flexibility.There is less emphasis on planning, greater
          freedom when adding new attributes or fields. And the possibility of
          varied syntax across databases. As a group, however, NoSQL languages
          lack the standard interface which SQL provides, so more complex
          queries can be difficult to execute. Though there are many dialects of
          SQL, all share a common syntax and almost-identical grammar. When
          querying relational databases, fluency in one language translates to
          proficiency in most others. On the other hand, there is very little
          consistency between NoSQL languages, as they concern a diverse set of
          unrelated technologies. Many NoSQL databases have a unique data
          manipulation language constrained by particular structures and
          capabilities.
        </p>
      </div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold">
          How JWT (JSON Web Token) authentication works?
        </h2>
        <p className="my-5">
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard
          (RFC 7519) for securely transmitting information between parties as
          JSON object.
        </p>
        <p>
          It is compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </p>
      </div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold">
          Differences Between Node.js and JavaScript?
        </h2>
        <p className="my-5">
          JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language.
        </p>
        <p>
          Any engine may run JavaScript. As a result, writing JavaScript is
          incredibly easy, and any working environment is similar to a complete
          browser. Node.js, on the other hand, only enables the V8 engine.
          Written JavaScript code, on the other hand, can run in any context,
          regardless of whether the V8 engine is supported. 4. A specific
          non-blocking operation is required to access any operating system.
          There are a few essential objects in JavaScript, but they are entirely
          OS-specific. Node.js, on the other hand, can now operate non-blocking
          software tasks out of any JavaScript programming. It contains no
          OS-specific constants. Node.js establishes a strong relationship with
          the system files, allowing companies to read and write to the hard
          drive. 5. The critical benefits of JavaScript include a wide choice of
          interfaces and interactions and just the proper amount of server
          contact and direct visitor input. Node.js, on the other hand, offers
          node package management with over 500 modules and the capacity to
          handle many requests at the same time. It also offers the unique
          ability to enable microservice architecture and the Internet.
        </p>
      </div>
      <div className="p-5">
        <h2 className="text-3xl font-semibold">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className="my-5">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue.
        </p>
        <p>
          If NodeJS can process the request without I/O blocking then the event
          loop would itself process the request and sends the response back to
          the client by itself. But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module. A
          single instance of Node.js runs in a single thread. If you have a
          multi-core system then you can utilize every core. Sometimes developer
          wants to launch a cluster of NodeJS process to take advantage of the
          multi-core system. The cluster module allows easy creation of child
          processes that all share the same server ports.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
