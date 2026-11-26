---
tags:
  - microservices
  - containers
---
## Containers for microservices
* Containers package an application with ==all the dependencies it needs to run==. This ensures the app behaves consistently across any computing environment.
* They are more lightweight than a virtual machine, as they share the host system's OS kernel, making them lightweight and faster to start.
	* Thus, they use better resources and perform better than VMs.
* They allow a "build once, run anywhere" deployment: this ensures consistency from development to production.
* A container isolates applications so they run independently without interfering with each other.
	* This also improves security and stability.

### Container components
* **Container images**: read-only blueprints with the app and dependencies.
* **Containers**: when you run an image, it creates a container, which is a live instance created from that image.
* **Runtimes**: software that manages container execution, including start, stop, and lifecycle management.
* **Layered file system**: container images are built in layers, where each layer represents a set of changes or additions. This layering allows for efficient storage and sharing, because common layers can be reused across different images.
* **Container lifecycle**: creation, running, pausing, stopping, and removal.

### Benefits of containers
* Provide portability across environments
* Reduce errors from environment differences
* Share host OS for resource efficiency
* Enable fast startup and easy management
* Support simple updates and rollbacks

### Containers in microservices...
1. Package each microservice into its own isolated container
2. Enable independent development, deployment and updates
3. Support scalability by adding or removing service instances as needed
4. Provide consistent environments to reduce integration issues
5. Facilitate modular, maintainable, and flexible microservices applications