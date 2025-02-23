# Dockerfile
FROM python:3.11-slim

# Install the full OpenJDK 17 so that javac is available.
RUN apt-get update && apt-get install -y --no-install-recommends \
    openjdk-17-jdk \
 && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set Java environment variables for runtime.
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV JDK_HOME=$JAVA_HOME
ENV PATH="$JAVA_HOME/bin:$PATH"
ENV LD_LIBRARY_PATH="$LD_LIBRARY_PATH:$JAVA_HOME/lib/server"
ENV JNIUS_JVM_DLL="$JAVA_HOME/lib/server/libjvm.so"

WORKDIR /app

# Copy project files into container.
COPY . /app

# Install Python dependencies.
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 8080.
EXPOSE 8080

# Run the application using Gunicorn.
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
