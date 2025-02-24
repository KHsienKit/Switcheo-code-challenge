# Anti-Patterns

- Declaration of Interfaces should be declared elsewhere and then imported when used
- Since this is TypeScript, avoid using the `any` type
    - i.e in the getPriority function, the parameter `blockchain` should be of type `String` 